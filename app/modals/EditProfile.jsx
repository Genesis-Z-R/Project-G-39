import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert ,Image} from 'react-native';
import { useRouter } from 'expo-router';

export default function EditProfileModal() {
  const router = useRouter();

  // Local state for form fields
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('Full Stack Developer');
  const [email, setEmail] = useState('john@example.com');

  const handleSave = () => {
    // ✅ In a real app, you'd update backend or local state here
    Alert.alert('Profile Updated', 'Your profile details have been saved.');

    router.back();  // Close the modal and go back to Profile screen
  };

  return (
    <View style={styles.container}>
        <Image source = {require('../../assets/kobby.jpeg')}
        style = {styles.avatar}
        />
      {/* Name Field */}
      <View style = {styles.Field}>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        style={styles.input}
      />
      </View>

      {/* Bio Field */}
      <View style = {styles.Field}>

      <Text style={styles.label}>Bio</Text>
      <TextInput
        value={bio}
        onChangeText={setBio}
        placeholder="Enter your bio"
        style={[styles.input, { height: 80,marginLeft:20 }]}
        multiline
      />
    </View>

      {/* Email Field */}
      <View style = {styles.Field}>
        <Text style={styles.label}>Email</Text>
         <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  Field:{
    flexDirection:'row',
    gap:15,
    marginBottom:20
    
  },
  avatar:{
    width : 200,
    height: 200,
    borderRadius: 300,
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    width:"80%"
  },
  saveButton: {
    backgroundColor: 'rgba(255, 82, 82,1.0)',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    padding: 12,
    marginTop: 15,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
