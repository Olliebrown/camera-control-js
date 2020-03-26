using System.Threading.Tasks;

public class Startup
{
    public async Task<object> Invoke(object input)
    {
        int v = (int)input;
        return Helper.AddSeven(v);
    }
}

static class Helper
{
    public static int AddSeven(int v) 
    {
        return v + 7;
    }
}