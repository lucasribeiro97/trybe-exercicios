class Estatistica:
    def __init__(self, lista_numeros):
        self.lista_numeros = lista_numeros

    def media(self):
        return sum(self.lista_numeros) / len(self.lista_numeros)

    def mediana(self):
        lista_ordenada = sorted(self.lista_numeros)
        tamanho = len(lista_ordenada)

        if tamanho % 2 == 0:
            mediana = (
                lista_ordenada[tamanho // 2 - 1] + lista_ordenada[tamanho // 2]
            ) / 2
        else:
            mediana = lista_ordenada[tamanho // 2]

        return mediana

    def moda(self):
        contagem = {}
        for numero in self.lista_numeros:
            if numero in contagem:
                contagem[numero] += 1
            else:
                contagem[numero] = 1

        maior_contagem = max(contagem.values())
        moda = [numero for numero, cont in contagem.items() if cont == maior_contagem]
        return moda
