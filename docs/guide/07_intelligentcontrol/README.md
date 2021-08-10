# Intelligente controle systemen

Wat willen we het algoritme leren?

1. De dynamica van het proces
2. De dynamica van de omgeving
3. Het controlleren van een 'state'
4. Nieuwe doelen en omgaan met grenzen

De basisregel voor lerende systemen draait rond **geheugen**. Zonder geheugen kan een controller geen historische informatie gebruiken om zijn controlestrategie aan te passen en te verbeteren.

## Overzicht

Enkele structuren die de definitie van een zelflerend systeem kunnen dragen.

* Neurale netwerken (NN)
* Genetische algoritmes (GA)
* Regressie bomen
* Support Vector Machines (SVM)

## Software-platformen

Verschillende programma's maken complexe technieken (zoals NN en SVM) toegankelijk door intuïtive GUI's, high level code en uitgebreide bibliotheken. We bespreken de volgende opties:

* Matlab Machine Learning Toolbox
* Python SKLearn bibliotheek

## Werken met 'Machine Learning' algoritmes

Het opstellen van een pijplijn is een rode draad van ruwe data naar Ml uitgangen zodat de systeemontwerper geen cruciale stappen over het hoofd ziet.

Een pijplijn is een ketting van acties welke data manipuleerd om gewenste kennis te verwerven of acties te bewerkstelligen. Het manipuleren van de verworven data vraagt een substantieel deel van de tijd. De nauwkeurigheid van een model staat of valt met de kwaliteit van de dataset.

1. Data-acquisitie
2. Data pre-processing
   1. Normalisatie
   2. Transformatie
   3. Validatie
   4. Eigenschappen (features)
3. Model training
   1. Model selectie
   2. Hyperparameters afstellen
4. Model validatie
5. Model toepassen
6. Model observeren

## Voorbeeld

## Zelflerende systemen

Zelflerende systemen bestaan in allerlei soorten en maten. In dit hoofdstuk maken we kennis met genetische algoritmes. De Jupyter Notebook applicatie maakt het mogelijk om Python programma's te schrijven en uit te voeren.

### Genetische algoritmes

```python
##### Info #####

# https://towardsdatascience.com/genetic-algorithm-implementation-in-python-5ab67bb124a6
# https://pygad.readthedocs.io/en/latest/

# This project is extended and a library called PyGAD is released to build the genetic algorithm.
# PyGAD documentation: https://pygad.readthedocs.io
# Install PyGAD: pip install pygad
# PyGAD source code at GitHub: https://github.com/ahmedfgad/GeneticAlgorithmPython
```

Importeer de nodige bibliotheken en produceer de initiële populatie.

```python
import numpy as np
import pygad
import control
import matplotlib.pyplot as plt
from control.matlab import *

from geneticalgorithm import geneticalgorithm as ga

"""
The target is to minimize this costfunction:
    J = Q*(1-y)^2 + R*(u)^2
    
The parameters to be optimized:
     K = w1 + w2/s + (w3*s)/(1+.0001*s) 
    
The given values are coeff of the model equation:
    where (x1,x2,x3)=(1,1,1)
    
    What are the best values for the 3 pid parms w1 to w3?
    We are going to use the genetic algorithm for the best possible values after a number of generations.
"""

# Inputs of the equation.
equation_inputs = [1,1,1]

# Number of the parameters we are looking to optimize.
num_parms = 3

"""
Genetic algorithm parameters:
    Mating pool size
    Population size
"""
sol_per_pop = 20
num_parents_mating = 8

# Defining the population size.
pop_size = (sol_per_pop,num_parms) # The population will have sol_per_pop chromosome where each chromosome has num_parms genes.
#Creating the initial population.
new_population = np.random.uniform(low=-4.0, high=4.0, size=pop_size)
print(new_population)
```

Bereken de kost van elke oplossing in de huidige populatie.

```python
def cal_pop_fitness(equation_inputs, pop):
    s = control.tf('s')
    G = equation_inputs[0]/(equation_inputs[1]*s + equation_inputs[2])            #simple process model
    K = pop[:,0] + pop[:,1]/s + (pop[:,2]*s)/(1+.0001*s)                          #simple PID eq
    # pop[:,0] uses first row of 'sol_per_pop' P-params
    # K becomes a 1xsolperpop matrix with tf's objects
    OL = K*G                                            #OpenLoop system
    H = 1
    CL = OL/(1-H*OL)                                  #ClosedLoop system
    
    dt = 0.01
    endTime = 50                                      #endTime needs to be big anough to calculate the fault on a big scale
    steps = int(endTime/dt)
    T = np.linspace(0,endTime,steps)
    X0 = 0
    
    num = (sol_per_pop,steps)
    y = np.zeros(num)
    for i in range(sol_per_pop):
        T, y[i] = control.step_response(CL[i], T, X0)               #calculates every population solution
    yout = np.zeros(num)
    for i in range(sol_per_pop):
        yout[i], T, xout = lsim(K[i],y[i],T,X0)                               #simulates the next controlleroutput (=processinput)
    
    Q = 1
    R = 0.001
    
    fitness = np.zeros((sol_per_pop))
    for i in range(sol_per_pop):
        fitness[i] = dt*np.sum((Q*(1-y[i])**2) + (R*(yout[i])**2))                             #[1xsol_per_pop] matrix
    fitness = np.transpose(fitness)
    
    fitness = np.nan_to_num(fitness, nan=99999)
    
    return fitness
#cal_pop_fitness(equation_inputs, new_population)
```

Selecteer de regel met de beste (=laagste) kost om ouders te vormen voor de creatie van de volgende generatie.

```python
def select_mating_pool(pop, fitness, num_parents):
    parents = np.empty((num_parents, pop.shape[1]))
    for parent_num in range(num_parents):
        min_fitness_idx = np.where(fitness == np.min(fitness))
        min_fitness_idx = min_fitness_idx[0][0]
        parents[parent_num, :] = pop[min_fitness_idx, :]
        fitness[min_fitness_idx] = 99999
    return parents
```

Selecteer op welk punt de crossover tussen twee ouders mag gebeuren. Meestal gebeurt dit in het midden. Bij een PID-controller zijn er 'slechts' drie parameters dus bestaat er geen midden.

```python
def crossover(parents, offspring_size):
    offspring = np.empty(offspring_size)
    crossover_point = np.uint8(offspring_size[1]/3)

    for k in range(offspring_size[0]):
        # Index of the first parent to mate.
        parent1_idx = k%parents.shape[0]
        # Index of the second parent to mate.
        parent2_idx = (k+1)%parents.shape[0]
        # The new offspring will have its first half of its genes taken from the first parent.
        offspring[k, 0:crossover_point] = parents[parent1_idx, 0:crossover_point]
        # The new offspring will have its second half of its genes taken from the second parent.
        offspring[k, crossover_point:] = parents[parent2_idx, crossover_point:]
    return offspring
```

Muteer de waarde(n) uit de offspring_crossover groep.

```python
def mutation(offspring_crossover):
    for idx in range(offspring_crossover.shape[0]):
        # The random value to be added to the gene.
        random_value = np.random.uniform(-1.0, 1.0, 1)
        offspring_crossover[idx, 0] = offspring_crossover[idx, 0] + random_value
        offspring_crossover[idx, 1] = offspring_crossover[idx, 1] + random_value
        offspring_crossover[idx, 2] = offspring_crossover[idx, 2] + random_value
    return offspring_crossover
```

Itereer over een gekozen aantal generaties.

```python
num_generations = 50
for generation in range(num_generations):
    print("Generation : ", generation)
    # Measing the fitness of each chromosome in the population.
    fitness = cal_pop_fitness(equation_inputs, new_population)

    # Selecting the best parents in the population for mating.
    parents = select_mating_pool(new_population, fitness, 
                                      num_parents_mating)

    # Generating next generation using crossover.
    offspring_size = (pop_size[0]-parents.shape[0], num_parms)
    offspring_crossover = crossover(parents, offspring_size)

    # Adding some variations to the offsrping using mutation.
    offspring_mutation = mutation(offspring_crossover)

    # Creating the new population based on the parents and offspring.
    new_population[0:parents.shape[0], :] = parents
    new_population[parents.shape[0]:, :] = offspring_mutation

    # The best PID parameters in the current iteration.
    print("PID parameters: ", new_population[np.where(fitness == np.min(fitness))][0])
    
    # The best result in the current iteration.
    print("Best result: ", fitness[np.where(fitness == np.min(fitness))][0])

```

Geeft de beste oplossingen weer na alle generaties te hebben doorlopen.

```python
fitness = cal_pop_fitness(equation_inputs, new_population)
best_match_idx = np.where(fitness == np.min(fitness))

print("Best solution : ", new_population[best_match_idx][0])
print("Best solution fitness : ", fitness[best_match_idx])
```

Geef het stapantwoord weer samen met prestatie parameters.

```python
def steprespons(parms, T, X0):
    s = control.tf('s')
    G = equation_inputs[0]/(equation_inputs[1]*s + equation_inputs[2])            #simple process model
    Koptim = parms[0] + parms[1]/s + (parms[2]*s)/(1+.0001*s)                          #simple PID eq
    OLoptim = Koptim*G                                            #OpenLoop system
    H = 1
    CLoptim = OLoptim/(1-H*OLoptim)                                  #ClosedLoop system 
    
    y, T = step(CLoptim, T, X0)
    print('P parameter: ' + str(round(parms[0],3)))
    print('I parameter: ' + str(round(parms[1],3)))
    print('D parameter: ' + str(round(parms[2],3)))
    print('Error volgens kostfunctie: ' + str(round(fitness[best_match_idx][0],2)))
    print('Max. amplitude: ' + str(round(np.max(y),1)))
    print('Overshoot: ' + str((round(np.max(y)/1)*10)) + '%')
    print('Stabilisatie tijd: ')
    print('Stijgtijd: ')
    
    plt.plot(T,y)
    plt.xlabel('Tijd [s]')
    plt.ylabel('Amplitude')
    plt.title('Stap antwoord')
    plt.grid()
    return 
    
steprespons(new_population[best_match_idx][0], np.arange(0,200,0.01), 0)
plt.show()
```

Als voorbeeld stellen we het volgende systeem voor:
$$G(s) = \frac{1}{s + 1}$$
Let op de instellingen van de kostfunctie (zoals stapgrootte, periode, weegparameters,...) want deze hebben een directe invloed op de prestaties van het algoritme.

Dit programma stelt een feedbacksysteem voor. Andere structuren zijn mogelijk zoals feedforward, Smith predictor, filters,...


## Bibliografie

[1]S. L. Brunton en J. N. Kutz, ‘Data Driven Science & Engineering’, p. 572, 2017.

[2]T. Duriez, S. L. Brunton, en B. R. Noack, Machine Learning Control – Taming Nonlinear Dynamics and Turbulence, vol. 116. Cham: Springer International Publishing, 2017. doi: 10.1007/978-3-319-40624-4.
