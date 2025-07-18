// app/(drawer)/profile.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import handleLogout from "../../utils/authHelp"


export default function ProfileScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* -------- User Avatar -------- */}
      <Image
        source={{ uri: 'https://your-avatar-url.com/avatar.jpg' }}  // Placeholder Avatar Image
        style={styles.avatar}
      />

      {/* -------- Username -------- */}
      <Text style={styles.username}>John Doe</Text>

      {/* -------- Bio or About -------- */}
      <Text style={styles.bio}>
        Full Stack Developer | React Native Enthusiast | Tech Blogger
      </Text>

      {/* -------- User Stats (Posts, Followers, Following) -------- */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5.2k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>300</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* -------- Action Buttons -------- */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push('/modals/EditProfile')}  // Assuming you create an edit profile modal later
        >
          <Ionicons name="pencil-outline" size={20} color="#007AFF" />
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#FF3B30' }]}
          onPress={handleLogout}  // Later: Replace with real logout logic
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={[styles.actionText, { color: '#fff' }]}>Logout</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
  actionsContainer: {
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginVertical: 5,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  actionText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
});
