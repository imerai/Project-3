var realwords = [
  {text: 'percent', size: 102},
  {text: 'state', size: 48},
  {text: 'we', size: 50},
  {text: 'health', size: 44},
  {text: 'tax', size: 36},
  {text: 'million', size: 28},
  {text: 'states', size: 28},
  {text: 'people', size: 25}, 
  {text: 'their', size: 25},
  {text: 'our', size: 23},
  {text: 'federal', size: 20},
  {text: 'obama', size: 19},
  {text: 'jobs', size: 19},
  {text: 'years', size: 19},
  {text: 'president', size: 19},
  {text: 'united', size: 19},
  {text: 'texas', size: 18},
  {text: 'rate', size: 16},
  {text: 'care', size: 16},
  {text: 'american', size: 15},
  {text: 'government', size: 15},
  {text: 'budget', size: 15},
  {text: 'national', size: 15},
  {text: 'voted', size: 14},
  {text: 'spending', size: 14},
  {text: 'against', size: 13},
  {text: 'income', size: 13},
  {text: 'time', size: 13},
  {text: 'bill', size: 13},
  {text: 'americans', size: 12},
  {text: 'average', size: 12},
  {text: 'republican', size: 12},
  {text: 'country', size: 12},
  {text: 'public', size: 11},
  {text: 'number', size: 11},
  {text: 'taxes', size: 11},
  {text: 'money', size: 11},
  {text: 'mccain', size: 10},
  {text: 'senate', size: 10},
  {text: 'school', size: 10},
  {text: 'never', size: 10},
  {text: 'city', size: 10},
  {text: 'debt', size: 10},
  {text: 'barack', size: 10},
  {text: 'highest', size: 9},
  {text: 'billion', size: 9},
  {text: 'country', size: 9},
  {text: 'less', size: 9},
  {text: 'donald', size: 9},
  {text: 'georgia', size: 9},
  {text: 'romney', size: 9},
  {text: 'law', size: 9},
  {text: 'insurance', size: 9},
  {text: 'vote', size: 9},
  {text: 'trump', size: 9},
  {text: 'plan', size: 8},
  {text: 'cut', size: 8},
  {text: 'spent', size: 8},
  {text: 'bush', size: 8},
  {text: 'campaign', size: 20},
  {text: 'women', size: 8},
  {text: 'oil', size: 44},
  {text: 'john', size: 8},
  {text: 'family', size: 8},
  {text: 'gun', size: 8},
  {text: 'unemployment', size: 8},
  {text: 'increase', size: 7},
  {text: 'general', size: 7},
  {text: 'dollars', size: 7},
  {text: 'york', size: 7},
  {text: 'private', size: 7},
  {text: 'entire', size: 7},
  {text: 'ohio', size: 7},
  {text: 'war', size: 7},
  {text: 'largest', size: 7},
  {text: 'country', size: 7},
  {text: 'governor', size: 7},
  {text: 'florida', size: 7},
  {text: 'congress', size: 6},
  {text: 'mitt', size: 6},
  {text: 'island', size: 6},
  {text: 'department', size: 6},
  {text: 'job', size: 5},
  {text: 'members', size: 5},
  {text: 'paid', size: 15},
  {text: 'election', size: 5},
  {text: 'rhode', size: 5},
  {text: 'lost', size: 4},
  {text: 'growth', size: 4},
  {text: 'rates', size: 4},
  {text: 'past', size: 4}, 
  {text: 'called', size: 4},
  {text: 'proposed', size: 3},
  {text: 'world', size: 3}, 
  {text: 'college', size: 3}, 
  {text: 'clinton', size: 3}, 
  {text: 'higher', size: 3}, 
  {text: 'trillion', size: 3}, 
  {text: 'america', size: 3}, 
  {text: 'lowest', size: 3}, 
  {text: 'cuts', size: 3}, 
  {text: 'cost', size: 2}, 
  {text: 'illegal', size: 2}, 
  {text: 'year', size: 2}, 
  {text: 'nation', size: 2}, 
  {text: 'security', size: 2}, 
  {text: 'democrats', size: 2}, 
  {text: 'economy', size: 2}, 
  {text: 'children', size: 2}, 
  {text: 'jersey', size: 1}, 
  {text: 'record', size: 1}, 
  {text: 'voting', size: 1}, 
  {text: 'candidate', size: 1}, 
  {text: 'costs', size: 1}, 
  {text: 'child', size: 1}, 
  {text: 'social', size: 1}, 
  {text: 'military', size: 1}, 
  {text: 'party', size: 1},  
  {text: 'business', size: 1}, 
  {text: 'background', size: 1},
  {text: 'legislation', size: 1},
  {text: 'supreme', size: 1},
  {text: 'medicare', size: 1},
  {text: 'families', size: 1},
  {text: 'presidential', size: 1},
  {text: 'workers', size: 1},
  {text: 'pleased', size: 1},
  {text: 'wisconsin', size: 1},
  {text: 'foreign', size: 1},
  {text: 'funding', size: 1},
  {text: 'virginia', size: 1},
  {text: 'administration', size: 1},
  {text: 'raised', size: 1},
  {text: 'employees', size: 1},
  {text: 'death', size: 1},
  {text: 'republicans', size: 1},
  {text: 'population', size: 1},
  {text: 'schools', size: 1},
  {text: 'systems', size: 1},
  {text: 'crimes', size: 1},
  {text: 'voter', size: 1},
  {text: 'white', size: 1},
  {text: 'financial', size: 1},
  {text: 'scott', size: 1},
  {text: 'planned', size: 1},
  {text: 'education', size: 1},
  {text: 'background', size: 1},
  {text: 'police', size: 1},
  {text: 'opposed', size: 1},
  {text: 'taxpayers', size: 1},
];