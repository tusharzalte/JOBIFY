const createJob=async (req,res)=>{
    res.send("create new job");
}
const deleteJob=async (req,res)=>{
    res.send("delete job");
}
const getAllJobs=async (req,res)=>{
    res.send("get all jobs");
}
const updateJob=async (req,res)=>{
    res.send("Updating jobs");
}
const showStats=async (req,res)=>{
    res.send("showing stats");
}
export {createJob,deleteJob,getAllJobs,updateJob,showStats};