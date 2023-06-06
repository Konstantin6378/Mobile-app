import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UserProfile = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled && result.assets[0].uri) {
      setImageUri(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImageUri(null);
  };

  return (
    <View>
      {imageUri ? (
        <View>
          <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
          <Button title="Remove" onPress={removeImage} />
        </View>
      ) : (
        <TouchableOpacity onPress={pickImage}>
          <View style={{ width: 200, height: 200, backgroundColor: 'gray' }} />
          <Button title="Choose Photo" onPress={pickImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserProfile;
