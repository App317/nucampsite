import { useState } from 'react';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [selectedCampsiteId, setSelectedCampsiteId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        campsites={campsites}
        /*onPress finds what campsite been selected from directory (arrow function is an onPress event) */
        onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
      />
      <CampsiteInfoScreen
        campsite={
          campsites.filter((campsite) => campsite.id === selectedCampsiteId)[0]
        }
      />
    </View>
  );
};

export default Main;
