import "./Blog.scss";
import axios from "axios";
import { useSate, useEffect } from "react";
import { useState } from "react";
import moment from "moment";
const YoutubeSearch = () => {
  const { video, setVideos } = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearchYt = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        type: "video",
        key: "AIzaSyBuxj6gTo3bp8hR7syU4J1aJqJkCXIaFbc",
        q: query
      }
    });
    if (res && res.item) {
      let raw = res.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map(item => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }
      setVideos(result);
    }

    console.log("check data youtube: ", res);
  };
  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearchYt}>
          Search
        </button>
      </div>
      <div className="yt-result">
        <div className="left">
          <iframe
            className="ifram-yt"
            src="https://www.youtube.com/embed/2VcCeg6Or_4"
            title="LIVERPOOL - MANCHESTER UNITED | NGÀY BÙNG NỔ CỦA SALAH - MANE - DIAZ - JOTA | NGOẠI HẠNG ANH 21/22"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right">
          <div className="title">
            LIVERPOOL - MANCHESTER UNITED | NGÀY BÙNG NỔ CỦA SALAH - MANE - DIAZ
            - JOTA | NGOẠI HẠNG ANH 21/22
          </div>
          <div className="createed-at">
            Created at:{" "}
            {moment("2022-04-19T21:17:39Z").format("DD-MM-YYYY HH:mm:ss A")}
          </div>
          <div className="author">Author: Kplus Sports</div>
          <div className="description">
            LIVERPOOL - MANCHESTER UNITED | NGÀY BÙNG NỔ CỦA SALAH - MANE - DIAZ
            - JOTA | NGOẠI HẠNG ANH 21/22 ...
          </div>
        </div>
      </div>
      <div className="yt-result">
        <div className="left">
          <iframe
            className="ifram-yt"
            src="https://www.youtube.com/embed/HLbizEXzG7s"
            title="[🔴LIVE] T1 vs KDF - HLE vs KT | 2022 LCK Summer Split"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right">
          <div className="title">
            LIVERPOOL - MANCHESTER UNITED | NGÀY BÙNG NỔ CỦA SALAH - MANE - DIAZ
            - JOTA | NGOẠI HẠNG ANH 21/22
          </div>
          <div className="createed-at">
            Created at:{" "}
            {moment("2022-04-19T21:17:39Z").format("DD-MM-YYYY HH:mm:ss A")}
          </div>
          <div className="author">Author: Kplus Sports</div>
          <div className="description">
            LIVERPOOL - MANCHESTER UNITED | NGÀY BÙNG NỔ CỦA SALAH - MANE - DIAZ
            - JOTA | NGOẠI HẠNG ANH 21/22 ...
          </div>
        </div>
      </div>
    </div>
  );
};
export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "OHlmY5CY98_iX1BVcAEUmfY8Jdg",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "kUX-O-4-MQynKdiGbgU78dmHesI",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "2VcCeg6Or_4"
//         },
//         "snippet": {
//           "publishedAt": "2022-04-19T21:17:39Z",
//           "channelId": "UC9xeuekJd88ku9LDcmGdUOA",
//           "title": "LIVERPOOL - MANCHESTER UNITED | NGÀY BÙNG NỔ CỦA SALAH - MANE - DIAZ - JOTA | NGOẠI HẠNG ANH 21/22",
//           "description": "LIVERPOOL - MANCHESTER UNITED | NGÀY BÙNG NỔ CỦA SALAH - MANE - DIAZ - JOTA | NGOẠI HẠNG ANH 21/22 ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/2VcCeg6Or_4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/2VcCeg6Or_4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/2VcCeg6Or_4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Kplus Sports",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-04-19T21:17:39Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "_4d57NmrxRq_sRnwfH5btVSzKlc",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "774D0Ogbx9Y"
//         },
//         "snippet": {
//           "publishedAt": "2021-10-24T18:02:20Z",
//           "channelId": "UC9xeuekJd88ku9LDcmGdUOA",
//           "title": "MAN UNITED - LIVERPOOL: DẤU CHẤM HẾT CỦA THỜI KỲ OLE? | THẢM HỌA TẠI OLD TRAFFORD | NGOẠI HẠNG ANH",
//           "description": "MAN UNITED - LIVERPOOL: ĐÂY LÀ DẤU CHẤM HẾT CỦA THỜI KỲ OLE? | NGÀY THẢM HỌA TẠI OLD TRAFFORD | NGOẠI ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/774D0Ogbx9Y/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/774D0Ogbx9Y/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/774D0Ogbx9Y/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Kplus Sports",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-10-24T18:02:20Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "D8fWIg81S8lph0N4I0v2DnZqDPM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "_1tr3EG_X8A"
//         },
//         "snippet": {
//           "publishedAt": "2022-07-12T15:28:41Z",
//           "channelId": "UC4LvrpNXujjbGOS4RDvr41g",
//           "title": "HIGHLIGHTS: LIVERPOOL - MAN UNITED | HỦY DIỆT KHÔNG THƯƠNG TIẾC, MÀN CHÀO SÂN ẤN TƯỢNG CỦA TÂN HLV",
//           "description": "Quý khán giả đừng quên SUBSCRIBE: https://www.youtube.com/c/FPTBóngĐá ------------------------------ Thưởng thức các trận cầu ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/_1tr3EG_X8A/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/_1tr3EG_X8A/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/_1tr3EG_X8A/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "FPT Bóng Đá",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-07-12T15:28:41Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "7V1IlBxOzy1LcxPVBAc6U8tUV5U",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "aempcWuF9OM"
//         },
//         "snippet": {
//           "publishedAt": "2022-07-12T14:57:14Z",
//           "channelId": "UCpoX4vSrvzFDID9hoFrqRRA",
//           "title": "Manchester United vs Liverpool  friendly match FIFA 2022",
//           "description": "Manchester United vs Liverpool friendly match FIFA 2022.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/aempcWuF9OM/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/aempcWuF9OM/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/aempcWuF9OM/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "sarahtmbell",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-07-12T14:57:14Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "ZjXI3t4NcBLbL3UqTXQXw4faSRM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "DSqPkW7gJ7c"
//         },
//         "snippet": {
//           "publishedAt": "2022-07-13T03:21:06Z",
//           "channelId": "UC4LvrpNXujjbGOS4RDvr41g",
//           "title": "🔴 TRỰC TIẾP: LIVERPOOL - MANCHESTER UNITED | BANGKOK CENTURY CUP 2022",
//           "description": "Quý khán giả đừng quên SUBSCRIBE: https://www.youtube.com/c/FPTBóngĐá TRỰC TIẾP: LIVERPOOL - MANCHESTER ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/DSqPkW7gJ7c/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/DSqPkW7gJ7c/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/DSqPkW7gJ7c/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "FPT Bóng Đá",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-07-13T03:21:06Z"
//         }
//       }
//     ]
//   }
