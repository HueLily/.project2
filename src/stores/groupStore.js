// src/stores/groupStore.js
import { defineStore } from 'pinia';
import { db } from '../firebase'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';

export const useGroupStore = defineStore('groupStore', {
    state: () => ({
        groups: [],
    }),
    actions: {
        async fetchGroups() {
            const groupsCollection = collection(db, 'groups'); // Reference to 'groups' collection
            const snapshot = await getDocs(groupsCollection); // Fetch documents
            this.groups = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map to array
        },
    },
});
