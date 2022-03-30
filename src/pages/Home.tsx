import React ,{ useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Home = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://quickstarts/api',
          scope: 'read:user',
        });
        console.log(token)
        const response = await fetch('http://localhost:3002/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(await response.json())
        setPosts(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return <>
  <div>Home</div>
    <button onClick={() => getAccessTokenSilently({
        audience: 'https://quickstarts/api',
        scope: "read:current_user",
      }).then(token => fetch('http://localhost:3002', {
        headers: {
        Authorization: `Bearer ${token}`
        }
      })
      .then(console.log)
      .catch(console.log)
      )}>Click para ver dados</button>
  </>
}

export default Home