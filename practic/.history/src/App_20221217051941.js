import './App.css';

function App() {

  let headers = {
    'QB-Realm-Hostname': 'XXXXXXXXXX.quickbase.com',
    'User-Agent': 'FileService_Integration_V2.1',
    'Authorization': 'QB-USER-TOKEN XXXX_XXXXX_XXXXXXXXXXXXXX',
    'Content-Type': 'application/json'
  };

  const fetchData = () => {    
    let body = {"from":"br8szmntp","select": 
[195,123,122,135,136,226,160,137,161,176,170,129,174,156,158,149,142,143,153,155,164,162,132,131,141,140,171, 172. 173.157. 181. 182. 165. 179. 145. 147. 169. 138. 168. 139. 180. 177. 152. 150. 151. 154. 166. 167. 163. 175. 178. 133. 227. 228. 229. 230. 232. 233. 234. 235. 144. 146. 159. 148. 236. 237. 238. 239. 240. 241. 242. 243. 244. 245. 246. 247. 248. 249. 250. 251.267. 268],"sortBy":[{"fieldId":6,"order":"ASC"}],"groupBy":[{"fieldId":40,"grouping":"equal-values"}],"options":{"skip":0,"top":0,"compareWithAppLocalTime":false}}

   fetch('https://api.quickbase.com/v1/records/query', {
     method: 'POST',
     headers: headers,
     body: JSON.stringify(body)
  }).then(res => {
     if (res.ok) {
       return res.json().then(res => {
         this.setState({
           data: [],
         })
       });
     }

     return res.json().then(resBody => Promise.reject({status: res.status, ...resBody}));
   }).catch(err => console.log(err))
 }


  return (
    <div className="App">
      Wassup
    </div>
  );
}

export default App;
