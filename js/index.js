//Objeto com propriedades e métodos
const carro = {
    marca: 'ford', modelo: 'mustang', ano: '1974', placa: 'US-JSON', 
    buzina: function() {alert('fon fon')}, 
    roncoMotor: function(){alert('Vruuuuuuuummmm')}
};
//dados a serem exibidos no identificados "texto" do index.html.
document.getElementById('texto').innerHTML='Este é meu novo carro. É um '+carro.marca+
' '+carro.modelo+' '+carro.ano+'!';

