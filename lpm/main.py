import matplotlib.pyplot as plt

# Dados de exemplo (substitua esses dados pelos dados reais coletados)
tempo = [0, 1, 2, 3, 4, 5, 6]  # Tempos (em segundos)
aceleracao_braço1_x = [0.5, 1.0, 1.5, 1.2, 0.8, 0.9, 1.1]  # Aceleração X do Braço 1 (em m/s^2)
aceleracao_braço1_y = [0.6, 0.9, 1.3, 1.1, 0.7, 1.0, 1.2]  # Aceleração Y do Braço 1 (em m/s^2)
aceleracao_braço1_z = [0.7, 1.1, 1.4, 1.0, 0.6, 0.8, 1.0]  # Aceleração Z do Braço 1 (em m/s^2)

aceleracao_braço2_x = [0.4, 0.8, 1.2, 0.9, 0.5, 0.7, 1.2]  # Aceleração X do Braço 2 (em m/s^2)
aceleracao_braço2_y = [0.7, 1.0, 1.4, 1.2, 0.6, 0.9, 1.3]  # Aceleração Y do Braço 2 (em m/s^2)
aceleracao_braço2_z = [0.6, 0.9, 1.1, 0.8, 0.4, 0.7, 1.1]  # Aceleração Z do Braço 2 (em m/s^2)

# Crie o gráfico de linha com subgráficos
plt.figure(figsize=(12, 8))  # Defina o tamanho da figura

# Subgráfico 1 - Aceleração do Braço 1
plt.subplot(2, 1, 1)
plt.plot(tempo, aceleracao_braço1_x, label='Aceleração X - Braço 1', marker='o')
plt.plot(tempo, aceleracao_braço1_y, label='Aceleração Y - Braço 1', marker='s')
plt.plot(tempo, aceleracao_braço1_z, label='Aceleração Z - Braço 1', marker='^')
plt.title('Aceleração do Braço 1')
plt.xlabel('Tempo (s)')
plt.ylabel('Aceleração (m/s^2)')
plt.grid(True)
plt.legend()

# Subgráfico 2 - Aceleração do Braço 2
plt.subplot(2, 1, 2)
plt.plot(tempo, aceleracao_braço2_x, label='Aceleração X - Braço 2', marker='o')
plt.plot(tempo, aceleracao_braço2_y, label='Aceleração Y - Braço 2', marker='s')
plt.plot(tempo, aceleracao_braço2_z, label='Aceleração Z - Braço 2', marker='^')
plt.title('Aceleração do Braço 2')
plt.xlabel('Tempo (s)')
plt.ylabel('Aceleração (m/s^2)')
plt.grid(True)
plt.legend()

# Ajuste o layout dos subgráficos
plt.tight_layout()

# Exibe o gráfico
plt.show()
