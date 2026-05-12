*Stephen Wolfram* proclaimed in his 2003 seminal work ***``A New Kind Of Science''*** that simple recursive programs in the form of ***Cellular Automata (CA)*** are a promising approach to replace currently used mathematical formalizations, e.g. differential equations, to improve the modeling of complex systems.

Over two decades later, while Cellular Automata have still been waiting for a substantial breakthrough in scientific applications, recent research showed new and promising approaches which combine **Wolfram's** ideas with learnable Artificial Neural Networks: So-called ***Neural Cellular Automata (NCA)*** are able to learn the complex update rules of CA from data samples, allowing them to model complex, self-organizing generative systems.

## Cellular Automata
*Cellular Automata* (CA) have been a subject of study since the 1940s, notably by *John von Neumann* (von Neumann, 1966) and others. At its core, *Cellular Automata* are discrete computational models, which consist of a finite, regular grid $\mathcal{G}$ of discrete cells. Each cell holds a discrete state $s_{i,t}$ at a given discrete time-step $t$.

As time progresses, cell states are updated recursively and synchronously across all cells, based on a set of rules $\mathcal{R}$ that utilize the local neighborhood $\mathcal{N}(s_{i,t})$ to calculate the new cell state: $s_{i,t+1}:=\mathcal{R}[\mathcal{N}(s_{i,t})]$ (Schiff, 2011). Figure 1 shows the computation process and rules for a basic CA with binary states ($s_{(x,y),t} \in \{0,1\}$).

*Cellular Automata* gained significant public recognition in the 1970s through *Conway's "Game of Life"* (Conway, 1970). This game employed a binary *Cellular Automaton* on a two-dimensional grid and update-rules based on a $3 \times 3$ neighborhood.

#### **Applications and Theoretical Significance**

Subsequent research demonstrated the broad applicability of CAs, including their use in *biological* (Bouligand, 1986; Coombes, 2009; Hatzikirou, 2012), *chemical* (Gerhardt, 1989), and *physical modeling* (Wolfram, 1983; Zaluska, 2021). Furthermore, certain CA configurations were shown to possess powerful theoretical computing properties, such as *Turing Completeness* (Cook, 2004) of certain CA configurations, thus establishing CAs as a *universal computing model*.

This theoretical strength led *Stephen Wolfram* to propose his well-known work, ***"A New Kind Of Science"*** (Wolfram, 2003). In it, he suggested that inherently limited mathematical formulations could be replaced by more powerful *"simple programs"* and formulated a new formal framework for numerous scientific applications grounded in *Cellular Automata*.

---

**References**

```bibtex
@book{von1966theory,
  author    = {von Neumann, John},
  title     = {Theory of Self-Reproducing Automata},
  publisher = {University of Illinois Press},
  year      = {1966}
}

@book{schiff2011cellular,
  author    = {Schiff, Joel L.},
  title     = {Cellular Automata: A Discrete View of the World},
  publisher = {Wiley},
  year      = {2011},
  doi       = {10.1002/9781118030639}
}

@article{conway1970game,
  author    = {Gardner, Martin},
  title     = {Mathematical Games: The fantastic combinations of John Conway's new solitaire game 'life'},
  journal   = {Scientific American},
  volume    = {223},
  pages     = {120--123},
  year      = {1970}
}

@article{bouligand1986fibroblasts,
  author    = {Bouligand, Yves},
  title     = {Fibroblasts and cellular automata},
  journal   = {Journal of Theoretical Biology},
  year      = {1986}
}

@article{coombes2009geometry,
  author    = {Coombes, S.},
  title     = {The geometry and biology of cellular automata},
  journal   = {The Mathematical Intelligencer},
  year      = {2009}
}

@article{hatzikirou2012go,
  author    = {Hatzikirou, Haralampos and others},
  title     = {'Go or Grow': The Feedback-Driven Mechanism of Tumor Cell Invasion},
  journal   = {PLOS Computational Biology},
  year      = {2012}
}

@article{gerhardt1989cellular,
  author    = {Gerhardt, M. and Schuster, H.},
  title     = {A cellular automaton model of excitable media},
  journal   = {Physica D: Nonlinear Phenomena},
  year      = {1989}
}

@article{wolfram1983statistical,
  author    = {Wolfram, Stephen},
  title     = {Statistical mechanics of cellular automata},
  journal   = {Reviews of Modern Physics},
  year      = {1983}
}

@article{zaluska2021step,
  author    = {Zaluska-Kotur, M. A.},
  title     = {Step-by-step physical modeling with cellular automata},
  journal   = {European Journal of Physics},
  year      = {2021}
}

@article{cook2004universality,
  author    = {Cook, Matthew},
  title     = {Universality in Elementary Cellular Automata},
  journal   = {Complex Systems},
  year      = {2004},
  volume    = {15},
  pages     = {1--40}
}

@book{wolfram2003new,
  author    = {Wolfram, Stephen},
  title     = {A New Kind of Science},
  publisher = {Wolfram Media},
  year      = {2002}
}

```




## CA Literature
Here is the curated list of references, categorized and formatted in tables with direct links to the papers or official repository pages.

### 🏛️ Foundational Theory & Classics

These works established the mathematical framework of Cellular Automata (CA), from self-replication to computational universality.

| Paper Title | Authors | Year | Link |
| --- | --- | --- | --- |
| **Theory of Self-Reproducing Automata** | Von Neumann & Burks | 1966 | [University of Illinois](https://www.google.com/search?q=https://archive.org/details/theoryofselfrepr00vonn) |
| **The Game of Life** | John Conway et al. | 1970 | [Scientific American](https://www.scientificamerican.com/article/mathematical-games-1970-10/) |
| **Statistical Mechanics of Cellular Automata** | Stephen Wolfram | 1983 | [APS Physics](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.55.601) |
| **A New Kind of Science** | Stephen Wolfram | 2002 | [Wolfram Science](https://www.wolframscience.com/nks/) |
| **Universality in Elementary Cellular Automata** | Matthew Cook | 2004 | [Complex Systems](https://www.complex-systems.com/abstracts/v15_i01_a01/) |
| **Cellular Automata: A Discrete View of the World** | Joel L. Schiff | 2011 | [Wiley Library](https://www.google.com/search?q=https://onlinelibrary.wiley.com/doi/book/10.1002/9781118030639) |

---

### 🧬 Biological & Physical Applications

These entries explore how local CA rules can model complex natural phenomena like morphogenesis, tumor growth, and chemical patterns.

| Paper Title | Authors | Year | Link |
| --- | --- | --- | --- |
| **Fibroblasts, Morphogenesis and Cellular Automata** | Y. Bouligand | 1986 | [Springer](https://www.google.com/search?q=https://link.springer.com/chapter/10.1007/978-3-642-82654-2_33) |
| **Formation of Spatially Ordered Structures in Chemical Systems** | Gerhardt & Schuster | 1989 | [Physica D](https://www.sciencedirect.com/science/article/abs/pii/0167278989901802) |
| **The Geometry and Pigmentation of Seashells** | Stephen Coombes | 2009 | [Nottingham Repository](https://www.google.com/search?q=https://eprints.nottingham.ac.uk/1310/) |
| **‘Go or Grow’: Emergence of Invasion in Tumour Progression** | Hatzikirou et al. | 2012 | [Oxford Academic](https://www.google.com/search?q=https://academic.oup.com/imammb/article/29/1/49/651352) |
| **Step Bunches, Nanowires and Other Vicinal “Creatures”** | Załuska-Kotur et al. | 2021 | [MDPI Crystals](https://www.mdpi.com/2073-4352/11/9/1135) |

---

## NCA Literature
Here is the curated list of references, categorized and formatted in tables with direct links to the papers or official repository pages.
### 🤖 Neural Cellular Automata (NCA) & Deep Learning

This section covers the "modern" era where update rules are learned using neural networks and backpropagation.

| Paper Title | Authors | Year | Link |
| --- | --- | --- | --- |
| **Convolutional Networks for Images, Speech, and Time Series** | LeCun & Bengio | 1998 | [MIT Press](https://www.google.com/search?q=https://dl.acm.org/doi/book/10.5555/303533) |
| **Cellular Automata as Convolutional Neural Networks** | William Gilpin | 2019 | [Physical Review E](https://www.google.com/search?q=https://journals.aps.org/pre/abstract/10.1103/PhysRevE.100.032402) |
| **Image Segmentation via Cellular Automata** | Sandler et al. | 2020 | [arXiv:2008.04965](https://arxiv.org/abs/2008.04965) |
| **Learning Graph Cellular Automata** | Grattarola et al. | 2021 | [NeurIPS](https://proceedings.neurips.cc/paper/2021/hash/af87f7cdcda223c41c3f3ef05a3aaeea-Abstract.html) |
| **Generative Adversarial Neural Cellular Automata** | Otte et al. | 2021 | [arXiv:2108.04328](https://arxiv.org/abs/2108.04328) |
| **Variational Neural Cellular Automata** | Palm et al. | 2022 | [arXiv:2201.12360](https://arxiv.org/abs/2201.12360) |
| **Attention-based Neural Cellular Automata** | Tesfaldet et al. | 2022 | [NeurIPS](https://www.google.com/search?q=https://proceedings.neurips.cc/paper_files/paper/2022/hash/3565e3170e3048777085c8052187ed2b-Abstract-Conference.html) |
| **Frequency-time Diffusion with Neural Cellular Automata** | Kalkhof et al. | 2024 | [arXiv:2401.06291](https://arxiv.org/abs/2401.06291) |

---


This site is maintained by

<a href="https://imla.hs-offenburg.de/"><img src="IMLA.png" width=250></a>

*The Instutite for Machine Learing and Analytics* at Offenburg University.
