import { useDispatch, useSelector } from 'react-redux';
import { RootType } from '../types';
import { deleteExpense } from '../redux/actions';

function Table() {
  const { expenses } = useSelector((state: RootType) => ({ ...state.wallet }));
  const dispatch = useDispatch();
  const tableBody = expenses.map((expense) => {
    const { id, description, tag, method, exchangeRates, currency, value } = expense;
    const { ask, name } = exchangeRates[currency];
    const variavelTrybe = Number(value);
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{variavelTrybe.toFixed(2)}</td>
        <td>{name}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{(variavelTrybe * Number(ask)).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button type="button">Editar</button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => dispatch(deleteExpense(id)) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  });
  return (
    <table>
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
}

export default Table;
