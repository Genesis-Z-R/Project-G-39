
// import Header from 'app/screenComponents/Header'



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import { useNavigation } from 'expo-router';
// import SpaceCad from "app/screenComponents/SpaceCad"

// type Space = {
//   id: string;
//   name: string;
//   image: string;
//   members: number;
//   joined: boolean;
// };

// const mockSpaces: Space[] = [
//   {
//     id: '1',
//     name: 'Tech & Programming',
//     image: 'https://images.unsplash.com/photo-1581093458791-ff6f3ebd8e01?w=400',
//     members: 12800,
//     joined: false,
//   },
//   {
//     id: '2',
//     name: 'Artificial Intelligence',
//     image: 'https://images.unsplash.com/photo-1581091870622-c4e1cc0f80da?w=400',
//     members: 9200,
//     joined: true,
//   },
//   {
//     id: '3',
//     name: 'Health & Wellness',
//     image: 'https://images.unsplash.com/photo-1557999341-bbbfd3ae0d3f?w=400',
//     members: 7600,
//     joined: false,
//   },
//   {
//     id: '4',
//     name: 'Education & Learning',
//     image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400',
//     members: 10400,
//     joined: false,
//   },
// ];

// export default function SpacesScreen() {
//   const [spaces, setSpaces] = useState(mockSpaces);
//   const navigation = useNavigation()

//   const toggleJoin = (id: string) => {
//     setSpaces(prev =>
//       prev.map(space =>
//         space.id === id ? { ...space, joined: !space.joined } : space
//       )
//     );
//   };

//   return (
//      <>
//     <Header title='Spaces' navigation={navigation}/>
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Explore Spaces</Text>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
//         {spaces.map(space => (
          
//           <>
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           </>
//         ))}
//       </ScrollView>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
//         {spaces.map(space => (
         
//           <>
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           </>
//         ))}
//       </ScrollView>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
//         {spaces.map(space => (
          
//           <>
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           <SpaceCad
//             key={space.id}
//             id={space.id}
//             name={space.name}
//             image={space.image}
//             members={space.members}
//             joined={space.joined}
//             onToggleJoin={toggleJoin}
//           />
//           </>
//         ))}
//       </ScrollView>
      

//       {/* Optional: You can show a list of space content below */}
//       {/* <FlatList
//         data={spaces.filter(space => space.joined)}
//         renderItem={({ item }) => (
//           <Text style={{ padding: 10 }}>Posts for: {item.name}</Text>
//         )}
//         keyExtractor={(item) => item.id}
//       /> */}
//     </ScrollView>
//      </> 
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 20,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     paddingHorizontal: 16,
//     marginBottom: 10,
//   },
//   scrollView: {
//     paddingLeft: 16,
//     marginTop :20, 
//     height: 280,
//     backgroundColor: "#10ac84",
//     paddingVertical: 10,

//   },
//   card: {
//     width: 180,
    
//     marginRight: 16,
//     borderRadius: 12,
//     backgroundColor: '#f8f9fa',
//     padding: 12,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
   
    
//   },
//   cardImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   spaceName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 4,
//   },
//   members: {
//     fontSize: 12,
//     color: '#777',
//     marginBottom: 10,
//   },
//   joinButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 6,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   joined: {
//     backgroundColor: '#e1f0ff',
//     borderWidth: 1,
//     borderColor: '#007AFF',
//   },
//   joinText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   joinedText: {
//     color: '#007AFF',
//   },
// });


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Header from 'app/screenComponents/Header'
import {useNavigation} from 'expo-router'


// Dummy community data
const dummyCommunities = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Discuss frontend, backend, and full stack web dev.',
    isJoined: true
  },
  {
    id: '2',
    name: 'AI & Machine Learning',
    description: 'All about artificial intelligence and ML.',
    isJoined: false
  },
  {
    id: '3',
    name: 'Mobile App Builders',
    description: 'React Native, Flutter, and mobile app dev topics.',
    isJoined: false
  },
  {
    id: '4',
    name: 'Productivity & Tech',
    description: 'Productivity tools, workflows, and systems.',
    isJoined: true
  }
];

const CommunityScreen = () => {
  const [communities, setCommunities] = useState(dummyCommunities);
  const navigation = useNavigation()

  const toggleJoin = (id: string) => {
    setCommunities((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isJoined: !c.isJoined } : c
      )
    );
  };

  const renderCommunity = ({ item }: { item: typeof dummyCommunities[0] }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        onPress={() => toggleJoin(item.id)}
        style={[
          styles.button,
          item.isJoined ? styles.leaveBtn : styles.joinBtn
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            item.isJoined ? styles.leaveText : styles.joinText
          ]}
        >
          {item.isJoined ? 'Leave' : 'Join'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const joined = communities.filter((c) => c.isJoined);
  const recommended = communities.filter((c) => !c.isJoined);

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Spaces' navigation={navigation}/>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.sectionTitle}>Your Communities</Text>
            {joined.length === 0 ? (
              <Text style={styles.emptyText}>You haven’t joined any communities yet.</Text>
            ) : (
              joined.map((item) => renderCommunity({ item }))
            )}

            <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
              Recommended
            </Text>
          </>
        }
        data={recommended}
        keyExtractor={(item) => item.id}
        renderItem={renderCommunity}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10
  },
  emptyText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#f1f2f6',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 10
  },
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20
  },
  joinBtn: {
    backgroundColor: '#1dd1a1'
  },
  leaveBtn: {
    backgroundColor: '#dfe6e9'
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14
  },
  joinText: {
    color: '#fff'
  },
  leaveText: {
    color: '#2d3436'
  }
});
