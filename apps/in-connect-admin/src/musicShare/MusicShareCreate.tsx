import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MusicShareCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="artist" source="artist" />
        <div />
        <TextInput label="sharedBy" source="sharedBy" />
      </SimpleForm>
    </Create>
  );
};
