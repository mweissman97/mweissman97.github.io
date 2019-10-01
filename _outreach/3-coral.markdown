---
title: "The Coral Microbiome Model"
excerpt: "Explore the relationship between coral health, microbiome composition, temperature, and disease."
collection: outreach
---
# Background
Coral reefs are some of the most important, and coolest, ecosystems on the planet. They're home to the majority of biodiversity in the ocean, but they are currently being threatened by stressors like climate change and disease. The coral I studied, *P. strigosa*, is currently dying at an alarming rate due to ocean warming and black band disease.

Just like humans rely on our own microbiome (fun fact: there are more bacterial cells in your body than person cells!), coral reefs have a mucus microbiome that they rely on heavily. The coral microbiome can be an important indicator for the overall health of the coral, which is why it is so interesting to study.

Microbial growth rates tend to be sensitive to temperature. Every species has a range of temperatures where they can grow well; in true Goldilocks fashion, if it's too hot or too cold, their growth rate decreases. This idea that temperature drives the composition of the microbiome (or who is in there and how much of them is there), was the central tenet of this research.

So how does temperature affect the composition of the coral microbiome? And how does that relate to black band disease?

# Microbiome Composition and Temperature
For this model, we broke the microbes that make up the coral microbiome by order, rather than by genus or species. There are 17 different orders of microbes that appear in abundances greater than 1%, so we are still able to model a great deal of complexity. If we were to try to zoom in and model at the family, genus, or species level, it would quickly become unwieldy and impossible to use. Each order of microbes has their own range of ideal growth temperatures and maximum growth rate.

Another important input to consider for our model is temperature. Over the course of the year, temperature isn't constant; the water is going to be a different temperature in July than it will be in January. So when we model temperature, we take into account seasonal temperature variations by using a sine wave function. Within the temperature equation, there are two key factors: the temperature mean and amplitude. The temperature mean represents how warm it is on average, so large increases in mean temperature can simulate overall global warming. The temperature amplitude measures the differences in extremes. When we look at global warming, we see an increase in the number of extremely hot and cold days, not just an overall change in average temperature, so it's important to take into account both.

So how does the composition change with temperature? See for yourself!

*Insert plotly here*

We can clearly see that large changes in both the temperature mean and amplitude have large effects on the overall composition. One of the easiest ways to qualify these changes is by looking at two key types of microbes: Alphaproteobacteria and Cyanobacteria. Alphaproteobacteria is important because, at normal temperatures, it's the type of microbe that has the highest abundance. When temperature mean changes in either direction or when amplitude increases, the Alphaproteobacteria population begins to disappear.

Cyanobacteria is of particular interest because it is linked to black band disease. In coral reefs infected with black band, we actually see elevated levels of Cyanobacteria. While it isn't pathogenic (it's not the exact microbe infecting the coral), large populations of Cyanobacteria are tied to black band disease. Our model shows that as both temperature mean and amplitude increase, the population of Cyanobacteria also increases.

# Black Band Disease and Temperature
If the abundance of Cyanobacteria is closely linked to temperature, then we can assume that the dynamics of black band disease are also sensitive to changes in both temperature mean and average. After constructing a new model that uses the size of the cyanobacteria population to change the infection rate of black band disease, we can observe important dynamics of black band disease as it relates to temperature.

The easiest way to measure the effect of temperature on the infection is by measuring how quickly it takes for the infection to reach its peak. Knowing how quickly the infection would take to destroy a single coral animal is important to conservation efforts. By predicting how quickly the infection will take as a function of temperature, the scientists monitoring these reefs can make decisions about how often they need to check the reefs for signs of disease.

<img src='/images/bbdtemp.png'>

The graph above shows the time to peak infection in days using colors. The yellow bands are moving very slowly, while the darker blue bands move more quickly. We can see that high temperature means and low temperature amplitudes help the infection move more quickly. The difference between those two speeds is almost a full month; a full month that scientists could be using to save those reefs.

# Conclusions
TLDR: Climate change is bad. It's really bad for our coral reefs, specifically because it messes up their microbiome and makes them more susceptible to black band disease.

If you're interested in learning more, here are some resources for you to check out:

When I started this project, I didn't even know that coral reefs *had* a microbiome. It was such an exciting opportunity to be able to learn something new and explore it through the lense of math. If you learned something new, have questions/comments/concerns, or just had fun playing with the temperature sliders, let me know!

Keep exploring.
