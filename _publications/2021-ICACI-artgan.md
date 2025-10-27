---
title: "ARTGAN: Artwork Restoration using Generative Adversarial Networks"
collection: publications
category: conferences
date: 2021-05-14
venue: '13th International Conference on Advanced Computational Intelligence (ICACI)'
authors: 'Abhijit Adhikary, Namas Bhandari, Evan Markou, and Siddharth Sachan'
thumbnail: '/images/paper-template.png' # Placeholder image
paperurl: 'https://evanmarkou.github.io/files/2021-icaci-artgan.pdf'
codeurl: 'https://github.com/namas191297/artgan'
abstract: 'We propose a method to recover and restore artwork that has been damaged over time due to several factors. Our method produces great results by completely removing damages in most of the images and perfectly estimating the damaged region. We achieved accurate results due to (i) a custom data augmentation technique which depicts realistic damages rather just blobs (ii) novel CResNetBlocks that subsequently upsample and downsample features to restore the image with efficient backpropagation measures, and (iii) the choice of using patch-discriminators to achieve sharpness and colorfulness. Our network architecture is a conditional Generative Adversarial Network where the generator uses a combination of adversarial loss, L1 loss and the discriminator uses binary crossentropy loss for optimization. While the expressiveness of existing comparison methods is limited, we present our results with several metrics for future comparison and showcase some visuals of recovered artwork'
bibtex: |-
  @INPROCEEDINGS{adhikary2021artgan,
  author={Adhikary, Abhijit and Bhandari, Namas and Markou, Evan and Sachan, Siddharth},
  booktitle={2021 13th International Conference on Advanced Computational Intelligence (ICACI)}, 
  title={ArtGAN: Artwork Restoration using Generative Adversarial Networks}, 
  year={2021},
  volume={},
  number={},
  pages={199-206},
  keywords={Measurement;Backpropagation;Visualization;Network architecture;Generative adversarial networks;Generators;Image restoration;Generative Adversarial Network;Image Restoration;Artwork;Neural Network;Image Inpainting},
  doi={10.1109/ICACI52617.2021.9435888}}
---
