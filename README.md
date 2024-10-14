# Train Prediction System

This project implements a distributed system for predicting station occupancy and seat availability for trains. It includes a web interface and can be simulated in a network environment.

## Table of Contents
1. [System Overview](#system-overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [System Components](#system-components)
6. [Network Integration](#network-integration)
7. [Cisco Packet Tracer Simulation](#cisco-packet-tracer-simulation)

## System Overview

The Train Prediction System consists of three main components:
1. Station Occupancy Prediction
2. Seat Availability Prediction
3. Web Interface

These components communicate over a network to provide real-time predictions based on user input.

## Prerequisites

- Python 3.7+
- pip (Python package manager)
- Cisco Packet Tracer (for network simulation)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/train-prediction-system.git
   cd train-prediction-system
   ```

2. Install required Python packages:
   ```
   pip install flask pandas scikit-learn joblib
   ```

3. Prepare your data:
   - Ensure you have a CSV file named `train_schedules.csv` in the project root directory.
   - The CSV should contain columns: 'Station_Code', 'Train_No', 'Distance', '1A', '2A', '3A', 'SL'.

## Usage

1. Start the prediction servers and web application:
   ```
   python distributed_train_prediction.py
   ```

2. Open a web browser and navigate to `http://localhost:5000` to access the web interface.

3. Use the forms to make predictions:
   - Enter a station code to predict occupancy.
   - Enter train details to predict seat availability.

## System Components

### Station Occupancy Prediction

- Uses a Random Forest Regressor to predict the number of trains at a station.
- Features used: Station_Code (encoded)
- Target: Number of trains (Occupancy)

### Seat Availability Prediction

- Uses a Random Forest Classifier to predict seat availability in 1A class.
- Features used: Train_No, Distance, 2A, 3A, SL
- Target: 1A_Available (binary)

### Web Interface

- Built with Flask
- Provides forms for user input
- Communicates with prediction servers over sockets

## Network Integration

The system uses socket programming for network communication:

- Occupancy Prediction Server: Listens on port 65432
- Availability Prediction Server: Listens on port 65433
- Web Server: Communicates with prediction servers and serves on port 5000

Data is serialized using pickle for transmission over the network.

## Cisco Packet Tracer Simulation

To simulate the network aspect of this system using Cisco Packet Tracer:

1. Open Cisco Packet Tracer and create a new project.

2. Add the following devices:
   - 1 Router (e.g., 2811 Router)
   - 1 Switch (e.g., 2960 Switch)
   - 4 PCs (to represent Client, Web Server, Occupancy Server, Availability Server)

3. Connect devices:
   - Connect all PCs to the Switch
   - Connect the Switch to the Router

4. Configure IP addresses:
   - Router: 192.168.1.1
   - Client PC: 192.168.1.10
   - Web Server PC: 192.168.1.20
   - Occupancy Server PC: 192.168.1.30
   - Availability Server PC: 192.168.1.40

5. Configure port numbers:
   - Web Server: 5000
   - Occupancy Server: 65432
   - Availability Server: 65433

6. Use the "Add Simple PDU" tool to simulate requests:
   - From Client to Web Server (port 5000)
   - From Web Server to Occupancy Server (port 65432)
   - From Web Server to Availability Server (port 65433)

7. Run the simulation to visualize data flow between components.

This simulation demonstrates the network topology and communication flow of the Train Prediction System in a simplified network environment.

Note: The actual implementation of the prediction algorithms and web server cannot be directly run in Packet Tracer. This simulation focuses on visualizing the network communication aspect of the system.
