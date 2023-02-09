function calcularValor(){
    var valorA = Number(document.getElementById('aValue').value)
    var valorB = Number(document.getElementById('bValue').value)

    soma = valorA + valorB
    document.getElementById('soma').innerHTML = soma

    subtracaoAB = valorA - valorB
    document.getElementById('subtracaoAB').innerHTML = subtracaoAB
    
    subtracaoBA = valorB - valorA
    document.getElementById('subtracaoBA').innerHTML = subtracaoBA

    multiplicacao = valorA * valorB
    document.getElementById('multiplicacao').innerHTML = multiplicacao

    divisaoAB = valorA / valorB
    divisaoAB = divisaoAB.toFixed(2)
    document.getElementById('divisaoAB').innerHTML = divisaoAB

    divisaoBA = valorB / valorA
    divisaoBA = divisaoBA.toFixed(2)
    document.getElementById('divisaoBA').innerHTML = divisaoBA

    potenciaAB = valorA ** valorB
    document.getElementById('potenciaAB').innerHTML = potenciaAB

    potenciaBA = valorB ** valorA
    document.getElementById('potenciaBA').innerHTML = potenciaBA

    squareRootA = Math.sqrt(valorA)
    squareRootA = squareRootA.toFixed(2)
    document.getElementById('squareRootA').innerHTML = squareRootA
    
    squareRootB = Math.sqrt(valorB)
    squareRootB = squareRootB.toFixed(2)
    document.getElementById('squareRootB').innerHTML = squareRootB

    function fatorial(valor){
        if (valor === 0 || valor === 1){
            return 1
        }
        for (var i = valor - 1; i >= 1; i--){
            valor *= i;
        }
        return valor
    }

    fatorialA = fatorial(valorA)
    document.getElementById('fatorialA').innerHTML = fatorialA

    fatorialB = fatorial(valorB)
    document.getElementById('fatorialB').innerHTML = fatorialB
    
    percentualAB = (valorB * 100) / valorA
    percentualAB = Math.ceil(percentualAB)
    document.getElementById('percentualAB').innerHTML = percentualAB + '%'

    percentualBA = (valorA * 100) / valorB
    percentualBA = Math.ceil(percentualBA)
    document.getElementById('percentualBA').innerHTML = percentualBA + '%'

    media = (valorA + valorB) / 2
    document.getElementById('media').innerHTML = media
}