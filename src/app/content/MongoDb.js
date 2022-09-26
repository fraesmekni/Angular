db.utilisateur.insertOne({
    id:1,
    email:"fares.mekni.jr@gmail.com",
    nom:"Mekni",
    prenom:"Fares",
    pseudo:"Fares_mekni",
    activation:0,
    date_creation:"jj/mm/aaaa",
    data_modification:"",
})
db.avis.insertOne({
    id:1,
    commentaire:"",
    note:30,
    date_avis:"jj/mm/aaaa",
    utilisateur_id:1,
    utilisateur_avis_id:1,
   
})
db.demande.insertOne({
    id:1,
    date_demande:"",
    response:30,
    date_response:"jj/mm/aaaa",
    utilisateur_id:1,
    traget_id:1,
   
})
db.target.insertOne({
    id:1,
    description:"",
    depart:30,
    arrivee:"jj/mm/aaaa",
    utilisateur_id:1,
    date_depart:"jj/mm/aaaa",
    date_retour:"jj/mm/aaaa",
    aler_retour:"",
    regulier:2,
   
})
db.discussion.insertOne({
    id:1,
    object:"",
    depart:30,
    arrivee:"jj/mm/aaaa",
    utilisateur_id:1,
    date_creation:"jj/mm/aaaa",
    destinataire_id:1000,
    expeditaire_id:1000,
    
   
})
db.message.insertOne({
    id:1,
    message:"",
    vu:30,
    arrivee:"jj/mm/aaaa",
    utilisateur_id:1,
    
    discussion_id:1000,  
})
db.utilisateur_role.insertOne({
  
    utilisateur_id:1,
    role_id:1,
    
   
})



