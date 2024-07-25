import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PartnerMatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="compatibilityScore" source="compatibilityScore" />
        <TextField label="user1" source="user1" />
        <TextField label="user2" source="user2" />
      </SimpleShowLayout>
    </Show>
  );
};
