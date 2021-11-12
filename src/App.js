import logo from './logo.svg';
import ImageViewer from './imageViewer/ImageViewer';

const PANELS = [
  {id: 0, panel: {title: "Kawasaki", content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", image: logo}},
  {id: 1, panel: {title: "KTM", content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", image: logo}},
  {id: 2, panel: {title: "Occasion", content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", image: logo}},
]

function App() {
  return (
    <div>
      <ImageViewer panels={PANELS}/>
    </div>
  );
}

export default App;
