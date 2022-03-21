import React from "react";
import Button from "../components/button";
import Form from "../components/form";
import Layout from "../components/layout";
import Table from "../components/table";
import useClients from "../hooks/use-clients";

export default function Home() {
  const {
    tableVisible,
    showTable,
    client,
    clients,
    saveClient,
    newClient,
    deleteClient,
    editClient,
  } = useClients();

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={newClient}>
                Novo cliente
              </Button>
            </div>
            <Table
              clients={clients}
              editClient={(client) => editClient(client)}
              deleteClient={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            changedClient={(client) => saveClient(client)}
            hidden={() => showTable()}
          />
        )}
      </Layout>
    </div>
  );
}
