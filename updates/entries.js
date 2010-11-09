////
// This function saves the new entries under the feed document.
// It needs to check the hmac sig [TODO]
// And save that under the right document, rather than create a new one (just find the feed and add an element to its entries!)
function(doc, req){
  doc['updated_at']   = new Date().getTime();
  notif =  JSON.parse(req.body);
  
  doc['feed_id']    = notif.id;
  doc['links']      = notif.links;
  doc['status']     = notif.status;
  doc['subtitle']   = notif.subtitle;
  doc['title']      = notif.title;
  doc['updated_at'] = notif.updated;

  for(index in notif.links) {
    link = notif.links[index];
    if(link.rel == "alternate" && link.type == "text/html") {
      doc['link'] = link;
    }
  }
  
  for(var i=0;i<notif.items.length;i=i+1)
  {
    item = notif.items[i];

    for(index in item.links) {
      link = item.links[index];
      if(link.rel == "alternate" && link.type == "text/html") {
        item['link'] = link;
      }
    }
    
    doc['entries'].push(item);
    if(doc['entries'].length > 50) {
      doc['entries'].shift();
    }
  }  
  return [doc, "thx!"]
}