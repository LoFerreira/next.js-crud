import React from "react";
import Client from "../core/client";
import Button from "./button";
import Input from "./input";

interface FormProps {
  client: Client;
  changedClient?: (client: Client) => void;
  hidden?: () => void;
}

const Form = (props: FormProps) => {
  const id = props.client?.id;
  const [name, setName] = React.useState(props.client?.name);
  const [age, setAge] = React.useState(props.client?.age);

  return (
    <div>
      {id ? (
        <Input
          label="Código"
          value={props.client.id}
          readonly
          className="mb-4"
        />
      ) : (
        false
      )}
      <Input
        label="Nome"
        value={name}
        onChange={setName}
        className="mb-4"
        placeholder="Digite seu Nome"
      />
      <Input label="Idade" type="number" value={age} onChange={setAge} />
      <div className="flex justify-end mt-7">
        <Button className="mr-2" color="blue" onClick={props.hidden}>
          Voltar
        </Button>
        <Button
          onClick={() => props.changedClient?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
      </div>
    </div>
  );
};

export default Form;
