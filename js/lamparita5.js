// Encender a los segundos impares o a los segundos multiplos de 10
function estadoL5(l1, segundos) {
    return !l1 || segundos % 10 == 0 && segundos != 0;
} 