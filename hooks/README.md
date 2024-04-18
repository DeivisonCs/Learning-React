# Learning Hooks

## useState
Adiciona uma variável de estado ao componente.

**const [state, setState] = useState(initialState)**

- Você pode atualizar o estado para um novo valor com a função **set**
- O componente é renderizado novamente toda vez que um novo estado é atribuido
- Você pode utilizar o estado anterior para calcular o novo valor: **setAge(prev => prev + 1)**
- A função set so atualiza o estado depois da renderização, ou seja, se você ler o estado logo depois de chamar o set e não renderizar o componente, você estará lendo o valor anterior
- Caso o novo estado seja igual ao anterior (determinado por uma comparação Object.is) o React não irá renderizar novamente

#### React Site: <https://react.dev/reference/react/useState>


## useMemo
Guarda o valor de uma **variável** evitando que o mesmo seja re-calculado toda vez que o componente for renderizado novamente.

**const cachedValue = useMemo(calculateValue, dependencies)**

- Melhora a perfomance evitando operações repetidas
- Caso não tenha parâmetros de dependência o useMemo irá guardar aquele valor durante todo o ciclo de vida do componente
- Caso haja um parâmetros de dependência o useMemo será refeito toda vez que a dependência for renderizada

### O useMemo dispensa o cache em situações como:
- As depenências mudam
- O componente é **desmotado e montado** novamente
- Limitações de memória do navegador

#### React Site: <https://react.dev/reference/react/useMemo>

## useCallback
Guarda o valor de uma **função** evitando que o mesmo seja re-calculado toda vez que o componente for renderizado novamente.

**const cachedFn = useCallback(fn, dependencies)**

- A função so é calculada novamente caso o parâmetro de dependência tenha sido alterado

#### React Site: <https://react.dev/reference/react/useCallback>