---
title: "Guiding Neural Collapse: Optimising Towards the Nearest Equiangular Tight Frame"
collection: publications
category: conferences
date: 2024-12-01
venue: 'Advances in Neural Information Processing Systems (NeurIPS)'
authors: 'Evan Markou, Thalaiyasingam Ajanthan, and Stephen Gould' 
thumbnail: '/images/paper-template.png' # Placeholder image
paperurl: 'https://evanmarkou.github.io/files/2024-neurips-guidingnc.pdf'
codeurl: 'https://github.com/evanmarkou/guiding-neural-collapse'
videourl: 'https://www.youtube.com/watch?v=bcCQBFN4OLM'
abstract: 'Neural Collapse (NC) is a recently observed phenomenon in neural networks that characterises the solution space of the final classifier layer when trained until zero training loss. Specifically, NC suggests that the final classifier layer converges to a Simplex Equiangular Tight Frame (ETF), which maximally separates the weights corresponding to each class. By duality, the penultimate layer feature means also converge to the same simplex ETF. Since this simple symmetric structure is optimal, our idea is to utilise this property to improve convergence speed. Specifically, we introduce the notion of *nearest simplex ETF geometry* for the penultimate layer features at any given training iteration, by formulating it as a Riemannian optimisation. Then, at each iteration, the classifier weights are implicitly set to the nearest simplex ETF by solving this inner-optimisation, which is encapsulated within a declarative node to allow backpropagation. Our experiments on synthetic and real-world architectures for classification tasks demonstrate that our approach accelerates convergence and enhances training stability.'
bibtex: |-
    @inproceedings{markou2024guidingnc,
    author = {Markou, Evan and Ajanthan, Thalaiyasingam and Gould, Stephen},
    booktitle = {Advances in Neural Information Processing Systems},
    editor = {A. Globerson and L. Mackey and D. Belgrave and A. Fan and U. Paquet and J. Tomczak and C. Zhang},
    pages = {35544--35573},
    publisher = {Curran Associates, Inc.},
    title = {Guiding Neural Collapse: Optimising Towards the Nearest Simplex Equiangular Tight Frame},
    url = {https://proceedings.neurips.cc/paper_files/paper/2024/file/3eb660055cdcdc9a545a0b16c1eff80d-Paper-Conference.pdf},
    volume = {37},
    year = {2024}}
---
