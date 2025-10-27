---
title: "Towards Scalable Backpropagation-Free Gradient Estimation"
collection: publications
category: conferences
date: 2025-12-01
venue: 'Australasian Joint Conference on Artificial Intelligence (AJCAI)'
award: '(Long Oral)'
authors: 'Daniel Wang, Evan Markou, and Dylan Campbell' 
thumbnail: '/images/500x300.png' # Placeholder image
paperurl: 'https://evanmarkou.github.io/files/2025-ajcai-backpropfree.pdf'
codeurl: 'https://github.com/danielwang0452/Forward-W-Perp'
abstract: 'While backpropagation---reverse-mode automatic differentiation---has been extraordinarily successful in deep learning, it requires two passes (forward and backward) through the neural network and the storage of intermediate activations. Existing gradient estimation methods that instead use forward-mode automatic differentiation struggle to scale beyond small networks due to the high variance of the estimates. Efforts to mitigate this have so far introduced significant bias to the estimates, reducing their utility. We introduce a gradient estimation approach that reduces both bias and variance by manipulating upstream Jacobian matrices when computing guess directions. It shows promising results and has the potential to scale to larger networks, indeed performing better as the network width is increased. Our understanding of this method is facilitated by analyses of bias and variance, and their connection to the low-dimensional structure of neural network gradients.'
bibtex: |-
    @inproceedings{wang2025backpropfree,
    author    = {Daniel Wang and
                Evan Markou and
                Dylan Campbell},
    title     = {Towards Scalable Backpropagation-Free Gradient Estimation},
    booktitle = {AJCAI},
    year      = {2025}}
---
