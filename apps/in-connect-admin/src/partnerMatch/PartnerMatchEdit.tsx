import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PartnerMatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="compatibilityScore" source="compatibilityScore" />
        <TextInput label="user1" source="user1" />
        <TextInput label="user2" source="user2" />
      </SimpleForm>
    </Edit>
  );
};
