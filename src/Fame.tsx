import { useEffect, useState } from "react";
import { getAll, getTiny } from "./services/Api";
import { FameResponse } from "./FameResponse";
import { FameTiny } from "./FameTiny";

export function Fame() {
  const [fames, setFames] = useState<FameResponse | null>() as any;
  const [tiny, setTiny] = useState<FameTiny[]>([]);

  useEffect(() => {
    getAll().then((data) => setFames(data));
    getTiny().then((data) => setTiny(data));
  }, []);

  // const deleteFame = (id: number) => {
  //   client.delete(`${id}`);
  //   setFames(
  //     fames.filter((fame: any) => {
  //       return fame.id !== id;
  //     })
  //   );
  // };

  return (
    <div>
      <h1>Fame Complete Table</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Innovation</th>
            <th>Year</th>
          </tr>
        </thead>
        {fames?.complete.map((person: any, id: number) => (
          <tbody key={id}>
            <tr>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.innovation}</td>
              <td>{person.year}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <h1>Fame Tiny Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Invented</th>
            <th>Year</th>
          </tr>
        </thead>
        {tiny.map((person, id: number) => (
          <tbody key={id}>
            <tr>
              <td>{person.name}</td>
              <td>{person.invented}</td>
              <td>{person.year}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
