export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "graduate-research-assistant-vc",
    company: "University of Minnesota",
    role: "Graduate Research Assistant — Human computer Interaction and Visualisation Lab",
    duration: "Aug 2025 - Present",
    location: "Minneapolis, MN",
    description:
      "Graduate Research Assistant working on computer vision and generative modeling for spatial reasoning, perception, and human–robot interaction in AR/VR/MR environments.",
    achievements: [
      "Developing the computer vision stack for a Point Ambiguity Resolution system in cluttered AR/VR/MR and HRI settings, focusing on grounding, spatial reasoning, and multi-object disambiguation.",
      "Performed 3D scene reconstruction using existing VGGT multiview outputs and integrated Gaussian Splatting to build high-fidelity 3D scene representations, followed by 3D segmentation via projection of SAM-generated 2D masks with interactive refinement.",
      "Advancing voxelization-based 3D scene modeling to improve geometric reasoning and referential understanding, while evaluating Vision-Language Models (VLMs) for grounding and spatial relation inference through controlled ablations.",
      "Implemented and benchmarked perception backbones (SAM2, DINOv3, YOLOv11n-seg), achieving 38.9 mAP (box), 32.0 mAP (mask), and 1.8 ms TensorRT inference latency to inform real-time XR perception design choices.",
      "Designed and experimented with Flow Matching and diffusion-based generative models for predicting hand trajectory endpoints to resolve pointing ambiguity, conditioned on scene context and current hand joint pose.",
      "Implemented object tracking pipelines and generated USDZ assets for downstream AR/VR interaction, while preparing datasets and advancing ML training workflows for perception and generative modeling."
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Gaussian Splatting",
      "3D Reconstruction",
      "Voxelization",
      "Flow Matching",
      "Diffusion Models",
      "Vision-Language Models",
      "SAM2",
      "DINOv3",
      "YOLOv11",
      "TensorRT",
      "AR/VR/MR",
      "USDZ"
    ],
    type: "part-time"
  },

  {
    id: "graduate-research-assistant-networking",
    company: "University of Minnesota",
    role: "Graduate Research Assistant — Computer Networking Lab",
    duration: "Aug 2024 - Aug 2025",
    location: "Minneapolis, MN",
    description:
      "Graduate Research Assistant focused on large-scale data analysis and time-series modeling for system behavior understanding and performance forecasting.",
    achievements: [
      "Processed and analyzed large-scale mobility and system log datasets spanning 200+ hours, performing exploratory data analysis including PDF estimation, statistical profiling, and time-series analysis to extract temporal and behavioral features.",
      "Built 3D spatiotemporal visualizations to study mobility patterns, system dynamics, and KPI evolution over time.",
      "Engineered features from multi-dimensional time-series data and benchmarked regression and forecasting models for event prediction and performance analysis.",
      "Evaluated classical and deep learning models (XGBoost, Temporal Convolutional Networks, Random Forests, DNNs) using MAE, MSE, RMSE, R², MAPE, and residual error distribution analysis to compare accuracy and robustness."
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Time-Series Analysis",
      "XGBoost",
      "Temporal Convolutional Networks (TCN)",
      "Random Forest",
      "Deep Neural Networks",
      "Data Visualization",
      "Statistical Analysis"
    ],
    type: "internship"
  },

  {
    id: "embedded-systems-research-intern-iitm",
    company: "Indian Institute of Tropical Meteorology",
    role: "Embedded Systems Research Intern — Climate Change Research Lab",
    duration: "July 2022 - July 2023",
    location: "Pune, India",
    description:
      "Embedded systems research internship focused on designing and deploying low-power, fault-tolerant environmental monitoring systems for real-world climate and hydrological data collection.",
    achievements: [
      "Designed and implemented a fault-tolerant telemetry logging system using ESP32 microcontrollers to interface with environmental sensors (BME680, DHT22) over UART, I2C, SPI, and 1-Wire protocols for real-time hydro-meteorological data acquisition using MicroPython.",
      "Developed a multi-modal wireless communication stack supporting BLE, Wi-Fi, and GSM (SIM800L), enabling SMS alerts, GPRS data upload, and remote fault recovery via AT commands and SMTP-based email notifications.",
      "Built a robust power and data-logging subsystem using SD card storage, BLE transmission, solar-compatible DC–DC converters, and Li-ion battery management to ensure long-term autonomous operation in field conditions.",
      "Performed extensive hardware bring-up, debugging, and validation using oscilloscopes, logic analyzers, multimeters, and serial debuggers to verify signal integrity, timing, and system robustness under varying environmental conditions.",
      "Deployed the fully integrated hardware–software system at Kavayitri Bahinabai Chaudhari North Maharashtra University (KBC-NMU), enabling continuous field-scale environmental monitoring with end-to-end system validation."
    ],
    technologies: [
      "ESP32",
      "MicroPython",
      "Embedded C",
      "UART",
      "I2C",
      "SPI",
      "1-Wire",
      "BLE",
      "Wi-Fi",
      "GSM (SIM800L)",
      "Low-Power Systems",
      "SD Card Logging",
      "Solar Power Systems",
      "Hardware Debugging"
    ],
    type: "internship"
  },

  {
    id: "research-intern-eeg-vit",
    company: "Vishwakarma Institute of Technology",
    role: "Research Intern",
    duration: "October 2021 - January 2022",
    location: "Pune, India",
    description:
      "Research internship focused on building real-time EEG-based human–computer interaction systems for upper-limb motion recognition and assistive control.",
    achievements: [
      "Built an end-to-end EEG-based upper-limb motion recognition pipeline to classify six motor functions, covering channel selection, signal preprocessing, feature extraction, and temporal modeling.",
      "Implemented EEG signal preprocessing using Butterworth bandpass and notch filtering to suppress power-line interference and physiological noise in real-world recordings.",
      "Reduced input dimensionality from 32 to 6 EEG channels based on motor-cortex relevance, lowering model inference latency by approximately 40% while preserving classification performance.",
      "Trained LSTM-based temporal models achieving ~78–82% multi-class accuracy with macro-averaged F1-scores of ~0.75–0.80, demonstrating balanced performance across motion classes.",
      "Maintained real-time inference capability (<20 ms per window), enabling suitability for online human–computer interaction and assistive-control applications."
    ],
    technologies: [
      "Python",
      "EEG Signal Processing",
      "Butterworth Filters",
      "Notch Filtering",
      "LSTM",
      "Time-Series Modeling",
      "Biomedical Signal Processing",
      "Real-Time Systems"
    ],
    type: "internship"
  },

  {
    id: "nus-summer-research-intern",
    company: "National University of Singapore",
    role: "Summer Research Intern",
    duration: "June 2021 - September 2021",
    location: "Remote",
    description:
      "Summer research internship focused on building end-to-end time-series forecasting and portfolio optimization systems for financial data.",
    achievements: [
      "Developed a complete time-series forecasting pipeline for stock price prediction using LSTM networks, trained on historical market data from the National Stock Exchange of India (NSE).",
      "Implemented data ingestion, preprocessing, normalization, and sliding-window sequence generation to support supervised learning on temporal financial data.",
      "Evaluated forecasting performance using RMSE and MAE, enabling quantitative comparison across model configurations.",
      "Integrated Markowitz mean–variance portfolio optimization on top of model-predicted returns to construct risk-adjusted investment portfolios.",
      "Deployed the full pipeline as an interactive Streamlit web application, enabling real-time stock selection, return visualization, and portfolio allocation analysis."
    ],
    technologies: [
      "Python",
      "LSTM",
      "Time-Series Forecasting",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Portfolio Optimization",
      "Streamlit",
      "Data Visualization"
    ],
    type: "full-time"
  },
];
