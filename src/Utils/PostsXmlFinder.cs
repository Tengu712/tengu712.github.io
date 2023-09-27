using System.Xml;
using Ssg.Components;

namespace Ssg.Utils;

public class PostsXmlFinder
{
    private const string INDEX_FILE_PATH = "./xml/posts/_index.xml";

    private static PostsXmlFinder? instance = null;

    private readonly string[] ids;
    private readonly PostData?[] postDatas;

    private PostsXmlFinder()
    {
        var xmlDoc = new XmlDocument();
        xmlDoc.Load(PostsXmlFinder.INDEX_FILE_PATH);

        var fileNodes = xmlDoc.SelectNodes("files/file");
        if (fileNodes == null)
        {
            throw new Exception($"[ error ] PostsXmlFinder(): <files> or <file> not found. : {PostsXmlFinder.INDEX_FILE_PATH}");
        }

        this.ids = new string[fileNodes.Count];
        this.postDatas = new PostData[fileNodes.Count];
        for (int i = 0; i < fileNodes.Count; ++i)
        {
            this.ids[i] = fileNodes[i]!.InnerText;
            this.postDatas[i] = null;
        }
    }

    public static PostsXmlFinder GetInstance()
    {
        if (PostsXmlFinder.instance != null)
        {
            return PostsXmlFinder.instance;
        }
        PostsXmlFinder.instance = new PostsXmlFinder();
        return PostsXmlFinder.instance;
    }

    public string[] GetIds() => this.ids;

    public PostData Get(string id)
    {
        for (int i = 0; i < this.ids.Length; ++i)
        {
            if (this.ids[i].Equals(id))
            {
                return this.get(i);
            }
        }
        throw new Exception($"[ error ] PostsXmlFinder.Get(): invalid id passed. : {id}");
    }

    public PostData? GetNextOf(string id)
    {
        int next = -1;
        for (int i = 0; i < this.ids.Length; ++i)
        {
            if (this.ids[i].Equals(id))
            {
                break;
            }
            next = i;
        }
        if (next == this.ids.Length - 1)
        {
            throw new Exception($"[ error ] PostsXmlFinder.GetNextOf(): invalid id passed. : {id}");
        }
        return next >= 0 ? this.get(next) : null;
    }

    public PostData? GetPrevOf(string id)
    {
        for (int i = 0; i < this.ids.Length; ++i)
        {
            if (this.ids[i].Equals(id))
            {
                return i < this.ids.Length - 1 ? this.get(i + 1) : null;
            }
        }
        throw new Exception($"[ error ] PostsXmlFinder.GetPrevOf(): invalid id passed. : {id}");
    }

    private PostData get(int idx)
    {
        if (this.postDatas[idx] != null)
        {
            return this.postDatas[idx]!;
        }

        var xmlPath = $"./xml/posts/{this.ids[idx]}.xml";
        var xmlDoc = new XmlDocument();
        xmlDoc.Load(xmlPath);
        var id = this.ids[idx];
        var title = this.selectNodes(xmlDoc, xmlPath, "blob/title")[0]!.InnerText;
        var date = this.selectNodes(xmlDoc, xmlPath, "blob/date")[0]!.InnerText;
        var tagsNodes = this.selectNodes(xmlDoc, xmlPath, "blob/tags/tag");
        var tags = new string[tagsNodes.Count];
        for (int i = 0; i < tagsNodes.Count; ++i)
        {
            tags[i] = tagsNodes[i]!.InnerText;
        }
        var contentNode = this.selectNodes(xmlDoc, xmlPath, "blob/main")[0]!;
        var content = new FromXml(contentNode);

        this.postDatas[idx] = new PostData { Id = id, Title = title, Tags = tags, Date = date, Content = content };

        return this.postDatas[idx]!;
    }

    private XmlNodeList selectNodes(XmlDocument xmlDoc, string xmlPath, string tagPath)
    {
        var nodeList = xmlDoc.SelectNodes(tagPath);
        if (nodeList == null || nodeList.Count == 0)
        {
            throw new Exception($"[ error ] PostsXmlFinder.selectNodes(): {tagPath} not found. : {xmlPath}");
        }
        return nodeList;
    }
}
