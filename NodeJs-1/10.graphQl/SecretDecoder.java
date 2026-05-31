import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SecretDecoder {
    private record Point(int x, int y, String ch) {}

    public static void decodeSecretMessage(String url) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create(url)).GET().build();
        String html = client.send(request, HttpResponse.BodyHandlers.ofString()).body();

        List<String> cells = new ArrayList<>();
        Matcher matcher = Pattern.compile("(?is)<td[^>]*>(.*?)</td>").matcher(html);
        while (matcher.find()) {
            cells.add(cleanCell(matcher.group(1)));
        }

        List<Point> points = new ArrayList<>();
        int maxX = 0;
        int maxY = 0;
        for (int i = 3; i + 2 < cells.size(); i += 3) {
            int x = Integer.parseInt(cells.get(i));
            String ch = cells.get(i + 1);
            int y = Integer.parseInt(cells.get(i + 2));
            points.add(new Point(x, y, ch));
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }

        String[][] grid = new String[maxY + 1][maxX + 1];
        for (int y = 0; y <= maxY; y++) {
            for (int x = 0; x <= maxX; x++) {
                grid[y][x] = " ";
            }
        }
        for (Point point : points) {
            grid[point.y()][point.x()] = point.ch().equals("█") ? "#" : " ";
        }

        for (int y = 0; y <= maxY; y++) {
            StringBuilder row = new StringBuilder();
            for (int x = 0; x <= maxX; x++) {
                row.append(grid[y][x]);
            }
            System.out.println(row);
        }
    }

    private static String cleanCell(String value) {
        return value
                .replaceAll("(?is)<[^>]+>", "")
                .replace("&nbsp;", " ")
                .replace("&amp;", "&")
                .replace("&lt;", "<")
                .replace("&gt;", ">")
                .trim();
    }

    public static void main(String[] args) throws Exception {
        decodeSecretMessage(args[0]);
    }
}
