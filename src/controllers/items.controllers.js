const itemsCtrl = {};
const Item = require("../models/Item");
const Swal = require('sweetalert2');

let items = undefined;

itemsCtrl.renderTableItem = async (req, res) => {
  try {

      items = await Item.find().lean();
      res.render("items/itemsTable", {items});

  } catch (error) {
    console.error(error);
  }
};


itemsCtrl.addItem = async (req, res) => {
  try {
    const item = await Item(req.body);
    await item.save();
    req.flash("success_msg", "item added successfully");
    res.redirect("/items");
  } catch (error) {
    console.error(error);
    req.flash("error_msg", "item couldn't add");
  }
};

//Edit items
itemsCtrl.renderEditItem = async (req, res) => {
  try {
    const item =await Item.findById(req.params.id).lean();
    //console.log(item);
    res.render("items/editItem", {item} );
  } catch (error) 
  {
    console.error(error);
  }
  
};

itemsCtrl.EditItem = async (req, res) => {
  try {
    
    const item = await Item.findByIdAndUpdate(req.params.id, req.body);
    await item.save();
    req.flash('success_msg','Item updated successfuly');
    res.redirect('/items');
    
  } catch (error) {
    console.error(error);
  }
  
};

//Delete item
itemsCtrl.deleteItem = async ( req, res ) =>{
  try {
    await Item.findByIdAndDelete( req.params.id );
    req.flash('success_msg', 'item deleted successfuly');
    res.redirect('/items');
  } catch (error) {
    req.flash('success_msg', "item couldn't delete successfuly");
    console.error(error);
  }
};

//Search item

  //Categorias

  itemsCtrl.renderCategoriaPC = async ( req, res ) => 
  {
    try {
      items = await Item.find( {'categoria':'Computo'}).lean();
      res.render("items/itemsTable", { items });
    } catch (error) {
      console.error(error);
    }
  };

  



module.exports = itemsCtrl;
