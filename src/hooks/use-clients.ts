import React from "react";
import CollectionClient from "../backend/db/collection-client";
import Client from "../core/client";
import ClientRepository from "../core/client-repository";
import useTableOrForm from "./use-table-or-form";

const useClients = () => {
  const [clients, setClients] = React.useState<Client[]>([]);
  const [client, setClient] = React.useState<Client>(Client.vazio());

  const { tableVisible, showForm, showTable } = useTableOrForm();

  const repo: ClientRepository = new CollectionClient();

  const getAll = () => {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  };

  const editClient = (client: Client) => {
    setClient(client);
    showForm();
  };
  const deleteClient = async (client: Client) => {
    await repo.delete(client);
    getAll();
  };

  const newClient = () => {
    setClient(Client.vazio());
    showForm();
  };
  const saveClient = async (client: Client) => {
    await repo.save(client);
    getAll();
  };
  React.useEffect(() => {
    getAll();
  }, [clients]);

  return {
    tableVisible,
    showTable,
    client,
    clients,
    saveClient,
    newClient,
    deleteClient,
    editClient,
    getAll,
  };
};

export default useClients;
