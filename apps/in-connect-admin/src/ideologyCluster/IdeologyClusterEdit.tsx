import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const IdeologyClusterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
