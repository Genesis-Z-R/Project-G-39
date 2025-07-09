// import { View, Text , Image} from 'react-native'
// import React from 'react'
import Header from 'app/screenComponents/Header'

// const Spaces = () => {
//   return (
//     <View style = {styles.container}>
//       <Header title='Spaces'/>
//       {/* Top row */}
//       <View style = {styles.topRowContainer}>
//         <Text > Your Spaces</Text>

//         <View>
//           <Text>Recently visited</Text>
//           <Image/>
//         </View>

//       </View>

//       {/* Top buttons */}
//       <View>
//         <TouchableOpacity>
//           <Image/>
//           <Text> Your Spaces</Text>
//         </TouchableOpacity>
//       </View>

//       {/*User Spaces Joined  */}
//         <View>
//           <Image/>
//           <Text/>
//         </View>

//         {/* Featured Spaces */}
//     <View>
//       <Text>Discover Spaces</Text>
//     </View>



//     </View>
//   )
// }

// export default Spaces
// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   }
// })

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from 'expo-router';
import SpaceCad from "app/screenComponents/SpaceCad"

type Space = {
  id: string;
  name: string;
  image: string;
  members: number;
  joined: boolean;
};

const mockSpaces: Space[] = [
  {
    id: '1',
    name: 'Tech & Programming',
    image: 'https://images.unsplash.com/photo-1581093458791-ff6f3ebd8e01?w=400',
    members: 12800,
    joined: false,
  },
  {
    id: '2',
    name: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1581091870622-c4e1cc0f80da?w=400',
    members: 9200,
    joined: true,
  },
  {
    id: '3',
    name: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1557999341-bbbfd3ae0d3f?w=400',
    members: 7600,
    joined: false,
  },
  {
    id: '4',
    name: 'Education & Learning',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400',
    members: 10400,
    joined: false,
  },
];

export default function SpacesScreen() {
  const [spaces, setSpaces] = useState(mockSpaces);
  const navigation = useNavigation()

  const toggleJoin = (id: string) => {
    setSpaces(prev =>
      prev.map(space =>
        space.id === id ? { ...space, joined: !space.joined } : space
      )
    );
  };

  return (
     <>
    <Header title='Spaces' navigation={navigation}/>
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Explore Spaces</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {spaces.map(space => (
          
          <>
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          </>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {spaces.map(space => (
         
          <>
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          </>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {spaces.map(space => (
          
          <>
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          <SpaceCad
            key={space.id}
            id={space.id}
            name={space.name}
            image={space.image}
            members={space.members}
            joined={space.joined}
            onToggleJoin={toggleJoin}
          />
          </>
        ))}
      </ScrollView>
      

      {/* Optional: You can show a list of space content below */}
      {/* <FlatList
        data={spaces.filter(space => space.joined)}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>Posts for: {item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
      /> */}
    </ScrollView>
     </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  scrollView: {
    paddingLeft: 16,
    marginTop :20, 
    height: 280,
    backgroundColor: "#10ac84",
    paddingVertical: 10,

  },
  card: {
    width: 180,
    
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
   
    
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  spaceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  members: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },
  joinButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
  },
  joined: {
    backgroundColor: '#e1f0ff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  joinText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  joinedText: {
    color: '#007AFF',
  },
});
