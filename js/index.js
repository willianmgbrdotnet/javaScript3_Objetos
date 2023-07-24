//variável que armazena o audio que será executado na função
let audio = document.getElementById('somMotor');
//Objeto com propriedades e métodos
const carro = {
    marca: 'ford', modelo: 'mustang', ano: '1974', placa: 'US-JSON', 
    buzina: function() {alert('fon fon')}, 
    roncoMotor: async function(){
        audio.play();
        //segunda ação com atraso de 3 segundos
        setTimeout(function(){
            alert('Vruuuuuuuummmm');}, 3000);
    }
};
//dados a serem exibidos no identificador "texto" do index.html.
document.getElementById('texto').innerHTML='Este é meu novo carro. É um '+carro.marca+
' '+carro.modelo+' '+carro.ano+'!';

