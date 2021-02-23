import { useState } from 'react'; //é um hook utilizado para definir estados dentro dos componentes

interface ButtonProps {
    color: string;
    children: string; //children => é uma propriedade, pode ser utilizado quando passamos algo dentro de um componente, 
    //o que está dentro dele é children
}
export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1); //Criando um contador utilizando o useState que vai retornar um array com 2 posições.
    //Na primeira posição é a variável e na segunda é uma função que atualiza o valor de counter.

    // O estado quando é definido dentro de um componente será atribuido um para cada componente. Ou seja, se houver 2 componentes
    // haverá 2 estados.

    //Criando uma função que incremente todo vez em que o botão for clicado e cada um será independente.
    function increment() {
        setCounter(counter + 1); //Cria um novo valor para counter (que será ele mesmo + 1)
    }

    return (
        <button type="button"
            style={{ backgroundColor: props.color }} //atribuindo propriedade color ao botão.
            onClick={increment} //Adicionando o evento click passando a função que irá incrementar.
        >
            {props.children}
            <strong>{counter}</strong>
        </button>
    );
}  