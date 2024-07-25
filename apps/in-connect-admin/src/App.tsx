import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { InterestClusterList } from "./interestCluster/InterestClusterList";
import { InterestClusterCreate } from "./interestCluster/InterestClusterCreate";
import { InterestClusterEdit } from "./interestCluster/InterestClusterEdit";
import { InterestClusterShow } from "./interestCluster/InterestClusterShow";
import { PartnerMatchList } from "./partnerMatch/PartnerMatchList";
import { PartnerMatchCreate } from "./partnerMatch/PartnerMatchCreate";
import { PartnerMatchEdit } from "./partnerMatch/PartnerMatchEdit";
import { PartnerMatchShow } from "./partnerMatch/PartnerMatchShow";
import { MusicShareList } from "./musicShare/MusicShareList";
import { MusicShareCreate } from "./musicShare/MusicShareCreate";
import { MusicShareEdit } from "./musicShare/MusicShareEdit";
import { MusicShareShow } from "./musicShare/MusicShareShow";
import { IdeologyClusterList } from "./ideologyCluster/IdeologyClusterList";
import { IdeologyClusterCreate } from "./ideologyCluster/IdeologyClusterCreate";
import { IdeologyClusterEdit } from "./ideologyCluster/IdeologyClusterEdit";
import { IdeologyClusterShow } from "./ideologyCluster/IdeologyClusterShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InConnect"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="InterestCluster"
          list={InterestClusterList}
          edit={InterestClusterEdit}
          create={InterestClusterCreate}
          show={InterestClusterShow}
        />
        <Resource
          name="PartnerMatch"
          list={PartnerMatchList}
          edit={PartnerMatchEdit}
          create={PartnerMatchCreate}
          show={PartnerMatchShow}
        />
        <Resource
          name="MusicShare"
          list={MusicShareList}
          edit={MusicShareEdit}
          create={MusicShareCreate}
          show={MusicShareShow}
        />
        <Resource
          name="IdeologyCluster"
          list={IdeologyClusterList}
          edit={IdeologyClusterEdit}
          create={IdeologyClusterCreate}
          show={IdeologyClusterShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
