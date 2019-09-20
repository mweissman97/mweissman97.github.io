---
title: "The SIR Model"
excerpt: "An introduction to compartment models and epidemiology."
collection: outreach
---
## What's a model with you?
The SIR Model is where all epidemiological models start, and was my personal introduction into math modeling. The SIR Model is as simple as you can get while still being useful.

This model is a **compartment model**, which means it treats everyone in a population as a member of a compartment. Over the course of time, individuals move between compartments, and those dynamics are captured using a series of differential equations. In the case of the SIR model, we assume three compartments, or subsets of the population: **Susceptible, Infected,** and **Removed**. (*If you are interested in reading more on the SIR Model, there are a wealth of other resources who have explained the intricacies and assumptions in depth.*)

These dynamics are represented with the following equations:

dS/dt = -B * I * S/N

dI/dt = B * I * S/N - v * I

dR/dt = v * I

Where S represents the total Susceptible population, I is the total Infected population, and R is the Removed population, which includes everyone who has either died or achieved immunity after recovering.
