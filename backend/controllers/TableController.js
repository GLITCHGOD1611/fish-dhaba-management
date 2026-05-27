const Table = require("../model/Table");

exports.getAllTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.getTableById = async(req,res)=>
{
    try {
        const {id} = req.params;
        const TableById = await Table.findById(id);
        res.status(200).json(TableById);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
}

exports.createTable = async(req,res)=>{
    try {
        const {tableNumber,capacity,status,assignedWaiter,currentOrder,openedAt,closedAt} = req.body;
        const table = await Table.create(
           {tableNumber,capacity,status,assignedWaiter,currentOrder,openedAt,closedAt}
        );
        res.status(200).json(table);
    } catch (err) {
        res.status(500).jaon({error:err.message});
    }
}

exports.updateTable = async(req,res)=>{
    try {
         const { id } = req.params;
        const {tableNumber,capacity,status,assignedWaiter,currentOrder,openedAt,closedAt} = req.body;
        const updateTable = await Table.findByIdAndUpdate(
           {tableNumber,capacity,status,assignedWaiter,currentOrder,openedAt,closedAt}
        );
        res.status(200).json(updateTable);
    } catch (err) {
        res.status(500).jaon({error:err.message});
    }
}

exports.deleteTable = async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedTable = await Table.findByIdAndDelete(id);
        res.status(200).json(deletedTable);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
}