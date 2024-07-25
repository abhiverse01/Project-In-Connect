import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MusicShareEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="artist" source="artist" />
        <div />
        <TextInput label="sharedBy" source="sharedBy" />
      </SimpleForm>
    </Edit>
  );
};
