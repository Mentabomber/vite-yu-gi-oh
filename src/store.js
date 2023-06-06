import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",  
    cardsList: [],
    loading: true,
    searchText: "",
    apiArchetypeParameter: "archetype",
    apiArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypesList: []
});