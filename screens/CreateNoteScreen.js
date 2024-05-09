import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import { GlobalStyles } from "../styles/global";

export default function CreateNoteScreen() {
  const globalStyles = GlobalStyles(); // Get dynamic styles
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [editingContent, setEditingContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [notes, setNotes] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const textInputRef = useRef(null); // Create ref

  useEffect(() => {
    if (user) {
      fetchNotes(); // Fetch notes when the user is logged in
    }
  }, [user]);

  const handleSaveOrUpdateNote = () => {
    if (!user) {
      if (textInputRef.current) {
        textInputRef.current.blur(); // Blur TextInput before showing alert
      }
      Alert.alert("Error", "You must be logged in to save or update a note.", [
        {
          text: "OK",
          onPress: () => {
            setContent(""); // Clear content
            setEditingContent(""); // Clear editingContent if in editing mode
          },
        },
      ]);
      return;
    }
    const url = editingId
      ? `http://192.168.15.36:3000/notes/${editingId}`
      : "http://192.168.15.36:3000/notes";
    const method = editingId ? "PUT" : "POST";
    const noteContent = editingId ? editingContent : content;

    AsyncStorage.getItem("jwtToken").then((token) => {
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          content: noteContent,
          user_id: user.userId,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          setIsSaved(true);
          setTimeout(() => setIsSaved(false), 8000);
          setEditingId(null);
          setEditingContent("");
          setContent("");
          fetchNotes(); // Refetch notes to update the list
          if (textInputRef.current) {
            textInputRef.current.blur(); // Blur TextInput
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Alert.alert(
            "Error",
            "Failed to save or update note: " + error.message
          );
        });
    });
  };

  const fetchNotes = () => {
    AsyncStorage.getItem("jwtToken").then((token) => {
      fetch("http://192.168.15.36:3000/notes", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNotes(data);
        })
        .catch((error) => {
          console.error("Error fetching notes:", error);
        });
    });
  };

  const handleDeleteNote = (noteId) => {
    AsyncStorage.getItem("jwtToken").then((token) => {
      fetch(`http://192.168.15.36:3000/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete the note");
          }
          return response.json();
        })
        .then((data) => {
          Alert.alert("Success", "Note deleted successfully");
          fetchNotes(); // Refetch notes to update the list
        })
        .catch((error) => {
          console.error("Error:", error);
          Alert.alert("Error", error.message);
        });
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Welcome to Create Page" />
      <View style={styles.inputContainer}>
        <Text style={[styles.title, globalStyles.text]}>
          Create your first note here!
        </Text>
        <TextInput
          ref={textInputRef}
          style={[styles.input, globalStyles.text]}
          placeholder={
            editingId ? "Edit Note Content" : "Enter Note Content..."
          }
          value={editingId ? editingContent : content}
          onChangeText={editingId ? setEditingContent : setContent}
          multiline
        />
      </View>
      <TouchableOpacity onPress={handleSaveOrUpdateNote} style={styles.button}>
        <Text style={[styles.buttonText, globalStyles.text]}>
          {editingId ? "Update Note" : "Save Note"}
        </Text>
      </TouchableOpacity>
      {isSaved && (
        <Text style={[styles.confirmationText, globalStyles.text]}>
          Note saved successfully!
        </Text>
      )}
      <Text style={[styles.title, globalStyles.text]}>Note List</Text>
      <ScrollView>
        {notes.map((note, index) => (
          <View key={note.id} style={styles.noteContainer}>
            <Text style={globalStyles.text}>
              {index + 1}. {note.content}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setEditingId(note.id);
                  setEditingContent(note.content);
                }}
                style={styles.editButton}
              >
                <Text style={[styles.editButton, globalStyles.text]}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteNote(note.id)}
                style={styles.deleteButton}
              >
                <Text style={[styles.deleteButton, globalStyles.text]}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBD6D6",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
  title: {
    fontSize: 17,
    textAlign: "center",
    margin: 10,
    marginTop: 20,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 3,
    borderColor: "gray",
    height: 100,
    paddingTop: 35,
    paddingHorizontal: 10,
    marginTop: 10,
    textAlign: "center",
  },
  confirmationText: {
    color: "green",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  noteContainer: {
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#EBD6D6",
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#81b0ff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "white",
  },
  editButton: {
    color: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    color: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
