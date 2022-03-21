import { editIcon, trashIcon } from "../assets/icons";
import Client from "../core/client";

interface TableProps {
  clients: Client[];
  editClient?: (client: Client) => void;
  deleteClient?: (client: Client) => void;
}

const Table = (props: TableProps) => {
  const showActions = props.editClient || props.deleteClient;

  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  };

  const renderData = () => {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`
        ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
        `}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  };

  const renderActions = (client: Client) => {
    return (
      <td className="flex justify-center">
        {props.editClient ? (
          <button
            className={`
             flex justify-center items-center
             text-green-600 rounded-full p-2 m-1
             hover:bg-purple-50
             `}
            onClick={() => props.editClient?.(client)}
          >
            {editIcon}
          </button>
        ) : (
          false
        )}
        {props.deleteClient ? (
          <button
            className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50
          `}
            onClick={() => props.deleteClient?.(client)}
          >
            {trashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  };

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
      bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};

export default Table;
