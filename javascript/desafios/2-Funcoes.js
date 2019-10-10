function desacelerar(quantidade, velocity, printar){
  for(velocity; velocity > 0; velocity -=quantidade){
    printar(velocity);
  }
  console.log("Desaceleração concluida");
}

desacelerar(20,150, velocity => console.log("Velocidade atual: " + velocity));